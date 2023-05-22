-- CreateTable
CREATE TABLE "_CategoryToRetailer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToRetailer_AB_unique" ON "_CategoryToRetailer"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToRetailer_B_index" ON "_CategoryToRetailer"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToRetailer" ADD CONSTRAINT "_CategoryToRetailer_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToRetailer" ADD CONSTRAINT "_CategoryToRetailer_B_fkey" FOREIGN KEY ("B") REFERENCES "Retailer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
