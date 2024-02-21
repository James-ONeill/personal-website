"use client";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import randomColor from "randomcolor";
import useTimeout from "@/hooks/useTimeout";

interface Props {
  cellSize?: number;
}

export default function GridAnimation({ cellSize = 25 }: Props) {
  const [columns, setColumns] = useState<number>(0);
  const [rows, setRows] = useState<number>(0);
  const [cells, setCells] = useState<number>(0);

  const [animation, setAnimation] = useState<anime.AnimeTimelineInstance>();

  useEffect(() => {
    const onResize = () => {
      const newColumns = Math.floor(document.body.clientWidth / cellSize);
      const newRows = Math.floor(document.body.clientHeight / cellSize);

      setColumns(newColumns);
      setRows(newRows);
      setCells(newColumns * newRows);
    };

    addEventListener("resize", onResize);
    onResize();

    () => removeEventListener("resize", onResize);
  }, [cellSize, cells, columns, rows]);

  useEffect(() => {
    if (cells === 0 || columns === 0 || rows === 0) return;

    const colors = randomColor({
      count: 10,
    });

    setAnimation((previous) => {
      previous?.pause();

      const timeline = anime.timeline({
        loop: true,
      });

      colors.map((color) => {
        timeline.add({
          targets: ".cell",
          backgroundColor: color,
          delay: anime.stagger(cellSize, {
            grid: [columns, rows],
            from: Math.floor(Math.random() * cells),
          }),
          endDelay: 2000,
        });
      });

      return timeline;
    });
  }, [cellSize, cells, columns, rows]);

  useTimeout(() => {}, 1000);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1] grid"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${cellSize}px, 1fr))`,
        gridTemplateRows: `repeat(auto-fit, minmax(${cellSize}px, 1fr))`,
      }}
    >
      {[...Array(cells)].map((_, key) => (
        <div
          key={key}
          id={key.toString()}
          className="cell relative min-h-full min-w-full"
        />
      ))}
    </div>
  );
}
