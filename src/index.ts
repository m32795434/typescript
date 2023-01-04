/*
function createRange(end) {
  const range = Array.from({ length: end }, (item, index) => index + 1);
  return range;
}
const range1 = createRange(4);
console.log(range1);
*/

function maximumContainers(scenarios: string[]) {
    if ((scenarios.length >= 1) && (scenarios.length <= (10 ** 3))) {
        scenarios.forEach((scn) => {
            const scnArray = scn.trim().split(' ');//ex:['10', '2', '2']
            let bud: number, cost: number, m: number;
            [bud, cost, m] = [parseInt(scnArray[0]), parseInt(scnArray[1]), parseInt(scnArray[2])]
            if (((bud >= 2) && (bud <= 10 ** 5)) && ((cost >= 1) && (cost <= bud)) && ((m >= 2) && (m <= bud))) {
                //console.log(bud, cost, m)
                //we start counting
                const unitsFirstBuy = Math.floor(bud / cost);// 10/2=5 //
                let mod = unitsFirstBuy % m;// 1 // 1
                let sumBonifiedCntrs = 0;//2 //4 ////sumatoria containers bonificados
                let bonifiedCntrs = Math.floor(unitsFirstBuy / m);//2 //1 //// containers bonificados del ciclo
                let prevMod: number = 0;
                do {
                    /*
                                        if ((mod === 0) && (bonifiedCntrs < m)) {
                                            sumBonifiedCntrs += bonifiedCntrs;
                                            break;//end the counting
                                        }*/
                    if ((bonifiedCntrs + mod) < m) {//-----BUG-FIX FOR SANTANDER TEC!
                        sumBonifiedCntrs += bonifiedCntrs;
                        break;//end the counting
                    }
                    else if ((bonifiedCntrs + mod) === m) {
                        sumBonifiedCntrs += bonifiedCntrs + 1;
                        break;//end the counting
                    } else {
                        //ex: (mod + bonifiedCntrs) > m
                        sumBonifiedCntrs += bonifiedCntrs;//same?//2 //
                        prevMod = mod;//-----BUG-FIX FOR SANTANDER TEC!
                        mod = ((bonifiedCntrs + mod) % m);//(2+1)%2=1
                        bonifiedCntrs = Math.floor((bonifiedCntrs + prevMod) / m)//(2+1)/2=1
                        //-----BUG-FIX FOR SANTANDER TEC! - START
                        if ((bonifiedCntrs + mod) < m) {
                            //WILL END, so I need to store the state.
                            sumBonifiedCntrs += bonifiedCntrs
                        }
                        //-----BUG-FIX FOR SANTANDER TEC! - END
                    }
                } while ((bonifiedCntrs + mod) >= m)

                const total = unitsFirstBuy + sumBonifiedCntrs;//5+4=9
                console.log(total);
            }
        })
    }
}
/*//a crazy man soluction...
function maximumContainers(scenarios: string[]) {
    scenarios.forEach((es: string) => {
        const scnArray = es.split(' ');
        let bud: number, cost: number, m: number;
        [bud, cost, m] = [parseInt(scnArray[0]), parseInt(scnArray[1]), parseInt(scnArray[2])]
        let num: number = Math.floor(bud / cost);
        let count = 0;
        while (num >= m) {
            count += 1;//1
            num = num - m + 1//
        }
        console.log((count + Math.floor(bud / cost)))
    })

}
*/

maximumContainers(['400 5 3']);