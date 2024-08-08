const express = require("express");
const app = express();
const {get, set, setnx, incrby, exists} = require('./model.redis')
app.get("/order", async (req, res)=>{
    const time = new Date().getTime()
    console.log(`Time request:: ${time}`)

    //gia su so luong ton kho hien tai la con 10
    const slTonKho = 10;

    //ten cua san pham la IPhone 13
    const keyName = "IPhone13";

    //gia su moi lan mua thi luong tieu thu hang ton kho la 1
    const slMua = 1;

    //so luong da ban ra, neu chua ban thi set = 0, con neu ban thi update + 1 moi lan user order thanh cong!
    const getKey = await exists(keyName) 
    if(!getKey){
        //set = 0
        await set(keyName, 0)
    }

    //lay so luong ban ra
    let slBanRa = await get(keyName)
    console.log(`Truoc khi user order thanh cong thi so luong ban ra === ${slBanRa}`)
    //neu so luong ban ra + so luong mua (slMua) > slTonKho return failed!
    //vdu so luong ban ban = 9, them 1 nguoi mua cuoi cung nua la 10 = slTonKho nen van hop le

    if(+slBanRa + slMua > slTonKho){
        console.log("HET HANG");
        return res.json({
            status: "error",
            msg:" HET HANG",
            time
        });
    }

    //neu user order thanh cong 
    slBanRa = await incrby(keyName, slMua);
    console.log(`Sau khi user order thanh cong thi so luong ban ra === ${slBanRa}`)
    if(slBanRa > slTonKho){
        await setnx("ban qua roi", slBanRa - slTonKho)
    }
    return res.json({
        status: "success",
        msg: "ok",
        time
    })
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})