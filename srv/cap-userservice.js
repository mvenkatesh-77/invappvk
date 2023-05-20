module.exports = (srv) =>{

const {Stks} = cds.entities('cap_inventory')

srv.after('READ', 'StockTransfer', each => {
    if (each.stocks <= 15) each.status = 'Low stock' 
})
}
