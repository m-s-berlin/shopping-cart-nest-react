/*
  Warnings:

  - You are about to drop the `shopcart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shopcartitem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shopcategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shopproduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "shopcartitem" DROP CONSTRAINT "shopcartitem_cartId_fkey";

-- DropForeignKey
ALTER TABLE "shopcartitem" DROP CONSTRAINT "shopcartitem_productId_fkey";

-- DropForeignKey
ALTER TABLE "shopproduct" DROP CONSTRAINT "shopproduct_categoryId_fkey";

-- DropTable
DROP TABLE "shopcart";

-- DropTable
DROP TABLE "shopcartitem";

-- DropTable
DROP TABLE "shopcategory";

-- DropTable
DROP TABLE "shopproduct";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartItem" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "cartId" INTEGER NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
