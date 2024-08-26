exports.bmi = (req,res) => {
    let tb = Number(req.body.tb)
    let bb = Number(req.body.bb)

    let tbAfter = tb / 100
    let bmi = bb / (tbAfter * tbAfter)

    let ket = "Normal Brrowh"
    
    if(bmi <= 18.5){
        ket = "Stunting Brrowh"
    }
    else if(bmi<= 24.9){
        ket = "Normal Brrowh"
    }
    else if(bmi<=29.9){
        ket = "Kelebihan berat Badan Brrowh"
    }
    else{
        ket = "Obesitas Brrowh"
    }
    

    let response = {
        tinggi: tb,
        berat: bb,
        bmi: bmi,
        status: ket
    }
    return res.json(response)
}