/*
  Warnings:

  - A unique constraint covering the columns `[slug,gameId]` on the table `Page` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Page_title_gameId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Page_slug_gameId_key" ON "Page"("slug", "gameId");
