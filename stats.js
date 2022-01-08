const os = require('os')

setInterval(() => {
    const {freemem, totalmem} = os;
    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt((total / mem) * 100)
    
    const stats = { 
        Free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents} MB`
    }
    console.clear()
    console.table(stats)
}, 1000)

