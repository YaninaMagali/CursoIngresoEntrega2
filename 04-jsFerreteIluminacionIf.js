function CalcularPrecio()
{
    let cantidadLamparitas = parseInt(document.getElementById("txtIdCantidad").value);
    let precioLamparita = 35;
    let marca = document.getElementById("Marca").value;
    let precioTotalSinDescuento;
    let precioConDescuento;
    let porcentajeIIBB = 10;
    let montoIIBB;
    
    if (cantidadLamparitas <= 2)
    {
        precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
        precioConDescuento = precioTotalSinDescuento;
    }
    else if (cantidadLamparitas == 3)
    {
        if(marca == "ArgentinaLuz")
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento- (precioTotalSinDescuento*15/100);
        }
        else if(marca == "FelipeLamparas")
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento- (precioTotalSinDescuento*10/100);        
        }
        else
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento- (precioTotalSinDescuento*5/100);
        }
    }
    else if (cantidadLamparitas == 4)
    {
        if(marca =="ArgentinaLuz" || marca == "FelipeLamparas")
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento- (precioTotalSinDescuento*25/100);
        }
        else
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento*20/100);
        }
    }
    else if (cantidadLamparitas == 5)
    {
        if(marca =="ArgentinaLuz")
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento- (precioTotalSinDescuento*40/100);
        }
        else
        {
            precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
            precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento*30/100);
        }
    }
    else
    {
        precioTotalSinDescuento = cantidadLamparitas * precioLamparita;
        precioConDescuento = precioTotalSinDescuento - (precioTotalSinDescuento*50/100);
    }

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

    //IIBB
    if (precioConDescuento > 120)
    {
        montoIIBB = precioConDescuento*porcentajeIIBB/100;
        alert("Usted pago $ " + montoIIBB +" de IIBB");
    }
    else
    {
        alert("Debe abonar " + precioConDescuento);
    }
} //FIN