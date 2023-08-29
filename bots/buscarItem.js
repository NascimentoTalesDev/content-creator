const puppeteer = require("puppeteer")


module.exports = async function buscar(codigo, item) {
  let product;
  let price;
  let oldPrice;
  let image;
  let items;

    let cod = codigo;

    let url = "https://www.magazinevoce.com.br/nascimentotales/p/";

    const browser = await puppeteer.launch({ 
        headless: "new",
        args: [
            "--disable-setuid-sandbox",
            "--no-sandbox",
            "--single-process",
            "--no-zygote"
        ],
        executablePath: process.env.NODE_ENV === 'production' 
        ? process.env.PUPPETEER_EXECUTABLE_PATH 
        : puppeteer.executablePath(),
    })
    
    const page = await browser.newPage()
    try {
        await page.goto(url + cod, { waitUntil: "networkidle0" })

        product = await page.evaluate(() => {
            try {
                product = document.querySelector(".sc-dcJsrY.jjGTqv").innerText
                return product
            } catch (error) {
                console.log(error);
            }
        })
        if (product === undefined) {
            console.log("indefinido");
            product = await page.evaluate(() => {
                try {
                    product = document.querySelector("h3.hide-mobile").innerText
                    return product
                } catch (error) {
                    console.log(error);
                }
            })
            price = await page.evaluate(() => {
                try {
                    price = document.querySelector(".p-price strong").innerText
                    return price
                } catch (error) {
                    console.log(error);
                }
            })
            oldPrice = await page.evaluate(() => {
                try {
                    oldPrice = document.querySelector(".p-through").innerText
                    return oldPrice
                } catch (error) {
                    console.log(error);
                }
            })
            image = await page.evaluate(() => {
                try {
                    image = document.querySelector(".photo.hide-mobile img").src
                    return image
                } catch (error) {
                    console.log(error);
                }
            })

        }else{
            price = await page.evaluate(() => {
                try {
                    price = document.querySelector(".sc-dcJsrY.eLxcFM.sc-hoLEA.kXWuGr").innerText
                    return price
                } catch (error) {
                    console.log(error);
                }
            })
            if (price) {
                oldPrice = await page.evaluate(() => {
                    try {
                        oldPrice = document.querySelector(".sc-dcJsrY.cHdUaZ.sc-gEkIjz.hhsvJQ").innerText
                        return oldPrice
                    } catch (error) {
                        console.log(error);
                    }
                })
                image = await page.evaluate(() => {
                    try {
                        image = document.querySelector(".sc-fUnMCh.lhoQy").src
                        return image
                    } catch (error) {
                        console.log(error);
                    }
                })

            } else {
                price = await page.evaluate(() => {
                    try {
                        price = document.querySelector(".sc-dcJsrY.eLxcFM.sc-bOhtcR.dOwMgM").innerText
                        return price
                    } catch (error) {
                        console.log(error);
                    }
                })
                if (!price) {
                    price = await page.evaluate(() => {
                        try {
                            price = document.querySelector(".sc-dcJsrY.eLxcFM.sc-fFlnrN.gtlDuG").innerText
                            return price
                        } catch (error) {
                            console.log(error);
                        }
                    })
                    oldPrice = await page.evaluate(() => {
                        try {
                            oldPrice = document.querySelector(".sc-dcJsrY.cHdUaZ.sc-hoLEA.bhWEor").innerText
                            return oldPrice
                        } catch (error) {
                            console.log(error);
                        }
                    })
                    image = await page.evaluate(() => {
                        try {
                            image = document.querySelector(".sc-fUnMCh.lhoQy").src
                            return image
                        } catch (error) {
                            console.log(error);
                        }
                    })

                } else {
                    
                    oldPrice = await page.evaluate(() => {
                        try {
                            oldPrice = document.querySelector(".sc-dcJsrY.cHdUaZ.sc-gEkIjz.hhsvJQ").innerText
                            return oldPrice
                        } catch (error) {
                            console.log(error);
                        }
                    })
                    image = await page.evaluate(() => {
                        try {
                            image = document.querySelector(".sc-fUnMCh.lhoQy").src
                            return image
                        } catch (error) {
                            console.log(error);
                        }
                    })
                }
            }
        }
        

        if (oldPrice === undefined) {
            console.log("vazio");
            items = await preencher(product, price, image, cod, item)
            
            return items
        }

        items = await preencher2(product, oldPrice, price, image, cod, item)
    
        return items
    } catch (error) {
        return console.log(error);
    }
}

function preencher(product, price, image, codig, item) {
    let productTratado;

    if (product.includes("Lava-lou") || product.includes("Guarda-Roupa") || product.includes("Micro-onda")) {
        console.log("preencher1");

        productTratado = product.split("-")

        if (productTratado[1].includes("\n")) {
            novoproduct = product.split("\n")
            product = novoproduct[0].trim()

            item = {
                nomeProduto: product,
                precoProduto: price.trim(),
                imagemProduto: image,
                codigoProduto: codig,
            }
            return item
        };

        item = {
            nomeProduto: productTratado[0].concat("-", productTratado[1]).trimEnd(),
            precoProduto: price.trim(),
            imagemProduto: image,
            codigoProduto: codig,
        }
        return item
    }

    if (product.includes("\n")) {
        novoproduct = product.split("\n")
        product = novoproduct[0].trim()
    }

    if (product.includes("-")) {

        productTratado = product.split("-")

        item = {
            nomeProduto: productTratado[0].trim(),
            precoProduto: price.trim(),
            imagemProduto: image,
            codigoProduto: codig,
        }
        return item
    }

    if (product.includes("(")) {
        productTratado = product.split("(")

        item = {
            nomeProduto: productTratado[0].trim(),
            precoProduto: price.trim(),
            imagemProduto: image,
            codigoProduto: codig,
        }
        return item
    }

    item = {
        nomeProduto: product,
        precoProduto: price.trim(),
        imagemProduto: image,
        codigoProduto: codig,
    }

    return item
}

function preencher2(product, oldPrice, price, image, codig, item) {
    let productTratado;

    if (product.includes("Lava-lou") || product.includes("Lava-Lou") ||product.includes("Guarda-r") || product.includes("Guarda-Roupa") || product.includes("Micro-onda") || product.includes("Micro-Onda")) {
        console.log("preencher2");

        productTratado = product.split("-")
        console.log(productTratado);
        if (productTratado[1].includes("\n")) {
            console.log("um");
            novoproduct = product.split("\n")
            product = novoproduct[0].trim()

            item = {
                nomeProduto: product,
                precoAntigoProduto: oldPrice,
                precoProduto: price.trim(),
                imagemProduto: image,
                codigoProduto: codig,
            }
            return item
        };

        item = {
            nomeProduto: productTratado[0].concat("-", productTratado[1]).trimEnd(),
            precoAntigoProduto: oldPrice,
            precoProduto: price.trim(),
            imagemProduto: image,
            codigoProduto: codig,
        }
        return item
    }

    if (product.includes("\n")) {
        console.log("dois");
        novoproduct = product.split("\n")
        product = novoproduct[0].trim()
    }

    if (product.includes("-")) {
        console.log("tres");
        productTratado = product.split("-")
        
        item = {
            nomeProduto: productTratado[0].trim(),
            precoAntigoProduto: oldPrice,
            precoProduto: price.trim(),
            imagemProduto: image,
            codigoProduto: codig,
        }
        return item
    }

    if (product.includes("(")) {
        console.log("quatro");
        productTratado = product.split("(")

        item = {
            nomeProduto: productTratado[0].trim(),
            precoAntigoProduto: oldPrice,
            precoProduto: price.trim(),
            imagemProduto: image,
            codigoProduto: codig,
        }
        return item
    }

    item = {
        
        nomeProduto: product.trim(),
        precoAntigoProduto: oldPrice,
        precoProduto: price.trim(),
        imagemProduto: image,
        codigoProduto: codig,
    }
    console.log("cinco");

    return item
}
