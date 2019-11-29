const logic = {
    /**
     * It takes two variables: an array with all the data and an object with the filtering parameters
     * 
     * @param {Array} dataArray 
     * @param {Object} filteringObject 
     * 
     * @returns An array with the results 
     */
    
    customFilter(dataArray, filteringObject) {

        let result = []
        
        dataArray.forEach(data => {

            let match, matchRegions = false
            for (let key in filteringObject) {
                
                if (key !== 'regions' && data.hasOwnProperty(key)) {

                    match = false

                    if (filteringObject[key] === data[key]) {
                        match = true
                    }else break
                }

                if (key === 'regions' && data.hasOwnProperty(key)) {

                    if (typeof filteringObject[key] === 'string'
                        && data.regions.includes(filteringObject[key])) {
                        matchRegions = true
                    }


                    if (filteringObject[key] instanceof Array
                        && filteringObject[key].length === data.regions.length
                        && filteringObject[key].every(x => data.regions.includes(x))) {
                        matchRegions = true
                    }

                }

            }
            if (filteringObject.hasOwnProperty('regions') && match && matchRegions) result.push(data)
            if (!filteringObject.hasOwnProperty('regions') && match) result.push(data)


        })

        return result
    }
}

module.exports = logic