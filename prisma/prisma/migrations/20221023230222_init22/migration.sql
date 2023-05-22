/*
  Warnings:

  - You are about to drop the column `mainCategoryId` on the `Retailer` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Retailer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Retailer" DROP CONSTRAINT "Retailer_mainCategoryId_fkey";

-- AlterTable
ALTER TABLE "Retailer" DROP COLUMN "mainCategoryId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Retailer" ADD CONSTRAINT "Retailer_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
