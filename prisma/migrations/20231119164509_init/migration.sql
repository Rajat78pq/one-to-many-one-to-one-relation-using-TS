/*
  Warnings:

  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `videoId` on the `User` table. All the data in the column will be lost.
  - Added the required column `videoId` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_videoId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userId",
DROP COLUMN "videoId";

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "videoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
