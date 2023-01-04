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
            const scnArray = scn.trim().split(' ');
            let bud: number, cost: number, m: number;
            [bud, cost, m] = [parseInt(scnArray[0]), parseInt(scnArray[1]), parseInt(scnArray[2])]
            if (((bud >= 2) && (bud <= 10 ** 5)) && ((cost >= 1) && (cost <= bud)) && ((m >= 2) && (m <= bud))) {
                //we start counting
                const unitsFirstBuy = Math.floor(bud / cost);
                let mod = unitsFirstBuy % m;
                let sumBonifiedCntrs = 0;
                let bonifiedCntrs = Math.floor(unitsFirstBuy / m);
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
                        // (mod + bonifiedCntrs) > m
                        sumBonifiedCntrs += bonifiedCntrs;
                        prevMod = mod;//-----BUG-FIX FOR SANTANDER TEC!
                        mod = ((bonifiedCntrs + mod) % m);
                        bonifiedCntrs = Math.floor((bonifiedCntrs + prevMod) / m)
                        //-----BUG-FIX FOR SANTANDER TEC! - START
                        if ((bonifiedCntrs + mod) < m) {
                            //WILL END, so I need to store the state.
                            sumBonifiedCntrs += bonifiedCntrs
                        }
                        //-----BUG-FIX FOR SANTANDER TEC! - END
                    }
                } while ((bonifiedCntrs + mod) >= m)

                const total = unitsFirstBuy + sumBonifiedCntrs;
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