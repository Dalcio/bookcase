export type BookNames = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i";

export type BookProps = { name: BookNames; index: number; id: string };

export type BookType = { releaseDate: Date; id: string } & (
  | {
      size: 4;
      name: "a";
      color: "yellow";
    }
  | {
      size: 2;
      name: "b";
      color: "red";
    }
  | {
      size: 5;
      name: "c";
      color: "orange";
    }
  | {
      size: 5;
      name: "d";
      color: "violet";
    }
  | {
      size: 0;
      name: "e";
      color: "lightblue";
    }
  | {
      size: 1;
      name: "f";
      color: "magenta";
    }
  | {
      size: 1;
      name: "g";
      color: "pink";
    }
  | {
      size: 5;
      name: "h";
      color: "darkblue";
    }
  | {
      size: 3;
      name: "i";
      color: "green";
    }
);
