namespace App {
  export interface Draggable {
    dragStartHandler(e: DragEvent): void;
    drageEndHandler(e: DragEvent): void;
  }

  export interface DragTarget {
    dragOverHander(e: DragEvent): void;
    dropHandler(e: DragEvent): void;
    dragLeaveHandler(e: DragEvent): void;
  }
}
