import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

export default function Buscar(){

    const [layouts, setLayouts] = useState('')
    const [layout, setLayout] = useState('')
    const [id, setId] = useState('')
    

    useEffect(()=>{
        axios.get("./api/layout").then(response =>{
            console.log(response.data);
            setLayouts(response.data);
        })
    }, [])

    async function mudar(ev) {
        ev.preventDefault();
        let data = id

        setLayout(layouts[data]);
    }
    
    const LayoutContainer = styled.section`
        height: 450px;
        width: 250px;
        max-height: 100vh;
        max-width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        background-color: ${layout.colorBackground};
        overflow: hidden;
`

    const CentralContainer = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
        top: 0;
    `
    const ImageContainer = styled.div`
        margin-top: ${layout.marginTopImageContainer}%;
        width: 85%;
        border-radius: 5px;
        background-color: ${layout.backgroundColorImage};////////////////////////////////////
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 30px;
        height: 60%;
        position: relative;
    `

    const Image = styled.img`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0.2rem auto 5rem;
        height: 60%;
        min-height: 60%;
    `
    const InfoContainer = styled.div`
        display: block;
        height: 40%;
        margin-top: -4rem;
    `
    const NomeProduto = styled.h2`
        text-align: left;
        font-size: 0.7rem;
        margin-bottom: 1rem;
        font-weight: 500;
        color: ${layout.textColorProduct};

    `
    const PrecosContainer = styled.div`
        display: block;
        margin-top: 4rem;
    `
    const PrecoAntigo = styled.span`
        display: block;
        text-decoration: line-through;
        font-size: 10px;
        left: 0;
        margin-bottom: 3px;
        margin-top: -4rem;
        color: ${layout.textColorPrecoAntigo};
    `
    const PrecoNovo = styled.span`
        font-size: 15px;
        background-color: ${layout.backgroundPrecoNovo};
        padding: 1px;
        border-radius: 2px;
        margin-bottom: 1px;
        font-weight: 900;
        color: ${layout.textColorPrecoNovo};
    `
    const LinkContainer = styled.div`
        background-color: ${layout.backgroundColorLink};
        min-height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    `
    const Link = styled.span`
        margin-left: 6px;
        font-size: 10px;
        font-weight: 500;
        color: ${layout.textColorLink};
    `
    const MessageContainer = styled.div`
        width: 85%;
    `
    const Message = styled.p`
        text-align: center;
        font-size: 8px;
        font-weight: bold;
        text-transform: uppercase;
        color: ${layout.textColorAviso};
    `

    return(
        <Layout>
            <h1>Buscar</h1>
            <div className="flex flex-col w-28">
                <div className="flex flex-col">
                    Escolha o Layout    
                        <form onSubmit={mudar}>
                            <select className="my-0" value={id} onChange={(ev) => setId(ev.target.value)}>
                                        {layouts.length > 0 && (layouts.map((layout, index) => 
                                            <option value={index}>{layout.name}</option>
                                        ))}
                            </select>
                            <button type="submit">Escolher</button>
                        </form>
                        
                </div>
                <div className="border-gray-500">
                <LayoutContainer>
                        <CentralContainer>
                            <ImageContainer>
                                <Image src="data:image/webp;base64,UklGRm4MAABXRUJQVlA4IGIMAACQMwCdASqOAI4APkkejEQioaEV6q5YKASEs7RNqACtOqfr0FQ9X741tIvgOzT51xJ7SNo65ZahFybvWbX99/zrJqH2hQnZtn3n/kegz1lP9j/z+fL9s/2HAeP5/XXS556s3bsphL9yBIaVru+WNt1eeXsxT/2XjRt/icE+N5ChQlK4CaqR6iXhpaeJfy5b7OYLqdyVfSH37gQ0eRX/PEuYEuEHin3GukG9BDMRo0xokwSU42/SQ3FTH3OlCQVHDGnI9tZY4ovfp2W9xeF81HRVvxGIvbOgugwBe1k3pUIk1/31exWZDvK/n6RvPBag5fxvezbS0eOIxlZIQuhe+uk3iUdTSTrzCLHIDhEKEWtlDJ0DhSaRjUriY3RynErRGHKSmzI+yddTb4g5ub91CzJAtQEZ1IeDt5PYwXDCeHoBqwACFq9MG3mI/X6v0fqG+1jzQTdx58/g3JoeQ5G9eLyMkIMSWLxGn7pjv8afPnK8rzEYz3aq78+8aD3MkJRcoFqrrmfEWSILlhCED/bjsyxcuCGJiSSDflNIfH9KN8hi64gHrpFAAP7fszgGCNw/EcL7AZVtolqd7OYswYYTEYcpAGS/Ax0Sftq4o43eofVe6zSmntqak4UxEvN32fExDvbFdpslKkkUAlBNM00rfYO1hGMaDBoPsipGN9zK4o7xa7oZyfoZe1bVtmSHcvATA+dOGUVAcHciv0fPU007Ec4DY8aio8Oy1JLPYRfaGKpKTry+TbhD0wXIh6qqeUFfP2Btmbx97E41KZXQph0vRb+kKtOb0wfrW5X6qWiAl638aexlxdOFKeFJnr/euNeMp8Yvvve2vS9QefUBJ4tIaKhRvod8gt3eEbguK2ZI/QxdQUeu+IC78hBS3v5NzV5kooKYFBWl5G7DM4CvZYTA64oZ0066ngWJjycuKoNCgoQaZWn3VRrug5g6fMoJRIWwDCChSNq71dCppFt8rWoYVWeekzcp4xKIXpO63V1PkL2HQuD+La6IEuH28HcF4rpUtBIbGsKyk9vnO+bwy4zTTYBF5l7lWJ62vlPUFeDrU1vb1qZxrwr9y/sh7DyP0nPDJ+IxxcxkXbmFA2ULTBtNEf/C478kw2GvqSzicEdaFWDNSKO3TISR8+/iMDr2WB66i6L2zGWrfH/T64C3lqWxDbesIkj5gtwgYkp/+jvWZoQrzAOe+9xNv4EjyIdxsVtHpgUehc6fWPQLrNQwc8IZ6nEMh8alWmgs0m+bar7OviNZtjdzcxQYPJTb+Jy+toPF25sEPHLHbobDcMAUV+7uhF9jdDqjK5pN6eR8u0jpNgZ5oQWa4kP9t0unumEcOm065gAvmzea8ntqcZ+E5ptfcpAcLjRsujgoqBktJkdklNcZOt9Lt1P7Vb2OT9j+ft5YW+PfRRfwG1T4f0eZdOgCVht3M13B8KSjpk5VV/DKwjTYaP1+4WsbwmtqSSZMneyi75G2+UlUeK8itlCSFNefzrZrRpJ9y6ORAQuAl9Rq9lpALYm3XmQGGOJFpqxE6LGEDZME3fNhXyNGXKkaZK4dNB7bVM5m+ol0kKpQRW/j31tHGDoB1FHebPNL89BMqMfUcZxfviyfishs/UVP9cdkO0GZgRQmuPlEtkuJdjdA8FLvJKOcfHce5F4gAHw15e1MVSPVIRqS+P2ajbrIEG6DD0z+7F6wmCf6Yu9xN6nSPt/YHZW6MGJro13seEeF/8bjaBhGPeIBU4lRuxtg0gq19cZKnN8yLbUxQKRPV6JXzErq0x/EOpaiqu7HAA3Uw/AG+uwi3m4cT89uvudu3aNIs7EbgBsgAGdvHyFdaTGTI0OOSod47pR7t4g+9TVThl9nFFRlavUUwfkRTsFSBjPoSnJXVhPKthLHZ9uexM1cQ5A4qVe3uniXu1ilZ5YG3CgLlLkolgalP+lxcx9VgMdmEuyilNM8mJ5VeqMiErIjMLr4xZ704T8adBg3UUIcaArbjYYeOoEew8RVCuf795D8qduyM7MEdMeB4LGvNdACqKkzuEhzkEEFDFN0VBC4ZWX1S1ks9CDXICa49wf1AOnWMTvOeLkAmJlpxSf9xOX/4meLBAZLNyw26SmbbYB5FMIEJnxjJTJU2faaGZ8yoTuPYLtM322+I4kv3+3uSXt5xgTSbJlAUCyZVixco09ZbgwYKzD9W8u0GGL+69fJL4rAdzfPSEpr36FnZEZdkCCF67FY0WLUfBZbTy5UvHLtNzDHGzC7wYcK8qaZ1rud68/VDOHsQUXR6tj5F0EUT0xPQXtK4A4SYwr74QF6nZPg18NYgavbGsxX4vwTnZTOTiDgvPPst6OAZDfcl720FJlHeVdazMxn5E1XsuBtrmcQVTBdkErDo2Ac5LxItC0DK/ZZyFSwhc3Ib5wuXLXbeTiqKFnzmH0AEcY0oxiO6oM7AvcGS7q/HZ+COiri6iGoxn9fxsH1G/F42tvgJBOyE/n4f732lY/bUTjj0/d8GofD8kDYy7tz9G1xOoCPQr+BhfED/5wrawJE0KaHBSqNM+mSx/lmdELW5M5f2lQDHA7HCnpp8FKZ080b0J63/3Q2Mg9XHfoWq1wf6m3ba9VrMwj/7KBK4fB7ykV3Gw7bbkDwxB12O4ghn3lexImMnT5Xat1ZVv26AwOVQznDII6u862RlzuLeOusgnh8SdKI8fPmXM3INBxYzHTHw3zBYoYtbP/D46edEP7x2zN7lEDK690VOly20iPWaHj/H4f/4VAeW39EOJ6tozKFp8ndNtkwMWYwwyfLOiduUShTk+MYoDoQrVaj8LQ7VlKyS2SeQgBLAPuhBsbt2kYLJy5Xaakv/t3we/v1wx+L0bqFCxcE/FD1yzaU+s+0BA6jWgqT/NNHrWpQiIT+u8O+yACBOb4++IYWQFMPOGVpVn/8QxUcvmBRgmseoZvQMCTvuc3/62jvLh8dcRmbHL3E7lnN5dg8xEK0mehe7N3WqMdw8dDSVuTMJNcdyAJu88YbClCQtaxS7o7uoAIaVUhoBY2CkHZesq+3/oM/jivPKPL5OKuuDIxtvTkaV9N/x+HcW6T/Hxcq8vOuCfbtaOJZocIb48N5CQKhKLrDEL9x56igoAguBVabh8TXLhw8+4Mt+M1MoOkyVlBdvUYEDCPoUBlh3tVzxGm8qOLM5/6lqb+uXdqaq1UzOcqlhuFUwze/lAmbT+skYS+hCpbm7k8WokgM/oipvleh0xRLRPDk+wzLm/BKSUyez8f/2wkhBzxNHC51pe9QVoi7sRw/sQGAlFngVq0LvJ4l9ybRpQ2PoRNTrzt8kp+9i+c7kMW8F8MBTOnYHGbsJZGfkuAj71tncTCV76q11nwV7cluJfVx6xTFhf7iWTlvR+pRxFwNqWCIw3vHDSUegpDejXrSXX3cC0s6uUA78R6sMGOKOj1+F/q8eWU0y1Oc/qA6thPYAPOrSAh0Q7FItTIKK99jjFc5WSvXH5OGe0s24l/EiQ/Gln2QkX+sWEh1SQ7fAf/2CKr+QkAa5tOvYar20r1gzhi4eKVwoEYHWqgkpbosI6HkA1Bx4vT2u+sLHYyCly//2wEg/hJs26a11mcacRb7BX4dNTjeZciFUCKucyQg9XGMuLbuky8UXTmbGMxOXE6aLjcJT738pZh/zvpArjTXxN+oiqTEVMWmKLmk3xg4vg62GcoXIWMsVHEhg3/YJwB5WV3URbC1P7q0e8lLlo2n6n/EoXUSDRXYfmHs+B/brZmM/r1Vf03i2bknq4EiieNSJ+W9oUBTvx2AKDpQvLkDMLa5peH/Pm2WnpAR6LPjzMgyhNCxtspApD5nBzj/g84Gm07PM6sRvvpc7VMVB6vKoQE/zqY3BUDuwBLj+bB6R93SDsfCq2iL0q8hLtUGMwgosWTpVUlPV/v5xcB5Gtk4DSgz2a5v4szlOv/F5DwC9s6QztgTyPVymuljc2vCNTewkxUdPP3YKvbnEmZT8kCoILZ7/JL4zrjkuCPW+l1FPIu4IZwDXYhvNX3gW1sfPK2tU6t9RwBsa5Wn2d7NwrfSCXYwACK2Dmdp59qw1Xa2Lt4hChr1LTadsYeM63BJR25/seCxxWvXWkzGYdLEQUshi/P4e3DX59BO/RXf8/11KJwFHfgdrXNCDF77nN4zXPqvGeEdHhI2Ohhe+NkzBBP1CejIpeaFCocPDAjLfpMMX1MOIGyJiJEZ64j6aka7Fq8f5dOLaTw/IMXYiqdu6AAAAA==" />
                                <InfoContainer>
                                    <NomeProduto>Guarda Roupa Casal Madesa Mônaco 3 Portas de Correr com Espelho - Preto</NomeProduto>
                                    <PrecosContainer>
                                        <PrecoAntigo>R$ 100,00</PrecoAntigo>
                                        <PrecoNovo>R$ 50,00</PrecoNovo>
                                    </PrecosContainer>
                                </InfoContainer>
                            </ImageContainer>
                            <LinkContainer>
                                <Link>LINK: </Link>
                            </LinkContainer>
                            <MessageContainer>
                                <Message>Essa promoção pode esgotar ou aumentar  a qualquer momento</Message>
                            </MessageContainer>
                        </CentralContainer>
                    </LayoutContainer>
                        
                </div>
            </div>
            
        </Layout>
    )
}