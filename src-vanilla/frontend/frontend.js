window.kanban = {};
window.kanban.thePage = require('./main_page').getPage();
window.kanban.rpc = {};
window.kanban.rpc.general = require('./fabcoin_rpc_general');
window.kanban.rpc.network = require('./fabcoin_rpc_network');
window.kanban.rpc.sendReceive = require('./fabcoin_rpc_send_receive');
window.kanban.rpc.mine = require('./fabcoin_rpc_mine');
window.kanban.rpc.profiling = require('./fabcoin_rpc_profiling');
window.kanban.fabcoinInitialization = require('./fabcoin_initialization');
window.kanban.computationalEngineCalls = require('./computational_engile_calls');
window.kanban.submitRequests = require('./submit_requests');
window.kanban.ids = require('./ids_dom_elements');
window.kanban.myNodes = require('./my_nodes');
window.kanban.allMyNodes = null;
window.kanban.profiling = {};
window.kanban.profiling.statistics = {};

window.kanban.rpc.forceRPCPOST = false;