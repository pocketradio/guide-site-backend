-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Checklist" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Checklist_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Checklist" ADD CONSTRAINT "Checklist_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
