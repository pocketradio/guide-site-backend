/*
  Warnings:

  - A unique constraint covering the columns `[title,gameId]` on the table `Page` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Page_title_gameId_key" ON "Page"("title", "gameId");
