/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Retailer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Retailer" DROP CONSTRAINT "Retailer_categoryId_fkey";

-- AlterTable
ALTER TABLE "Retailer" DROP COLUMN "categoryId";
