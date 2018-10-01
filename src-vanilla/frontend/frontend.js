window.kanban = {
  thePage: null,
  rpc: {
    general: require('./fabcoin_rpc_general'),
    network: require('./fabcoin_rpc_network'),
    sendReceive: require('./fabcoin_rpc_send_receive'),
    mine: require('./fabcoin_rpc_mine'),
    profiling: require('./fabcoin_rpc_profiling'),
    forceRPCPOST: false
  },
  kanbanJS: {
    crypto: require('./kanbanjs/crypto')
  },
  kanbanPlusPlus: {
    general: require('./kanban_plus_plus')
  },
  kanbanGO: {
    rpc: require('./kanbango/rpc'),
    initialization: require('./kanbango/initialization')
  },
  fabcoin: {
    initialization: require('./fabcoin/initialization')
  },
  initializationOLD: {
    fabcoin: require('./fabcoin_initialization'),
  },
  miscellaneous: require('./miscellaneous_frontend'),
  computationalEngineCalls: null,
  submitRequests: require('./submit_requests'),
  ids: require('./ids_dom_elements'),
  myNodes: require('./my_nodes'),
  allMyNodes: null,
  profiling: {
    memoryPoolArrivalTimes: null,
    statistics: {},
    statDetails: {}
  }
};

window.kanban.thePage = require('./main_page').getPage(); // <- function call uses window.kanban
window.kanban.computationalEngineCalls = require('./computational_engine_calls'); // <- module loading uses window.kanban