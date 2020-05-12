
import dateService from '../services/dateService.js'
import tableService from '../services/tableService.js'
export default {
    state: {
        times: ["6PM", "7PM", "8PM", "9PM", "10PM", "11PM"],
        locations: ["Any Location", "Patio", "Bar", "Roof", "inside"],
        tables: [],
        tablesModel: [],
        isDateExist: false
    },
    getters: {
        times(state) {
            return state.times;
        },
        locations(state) {
            return state.locations
        },
        tables(state) {
            return state.tables;
        },
        isDateExist(state) {
            return state.date;
        }

    },
    mutations: {
        async setTables(state, { date }) {
            if (date) {
                state.tables = [...date.tables];
                state.date = true;
            }
            else state.tables = [...state.tablesModel];
        },
        async initTablesModel(state, { tables }) {
            state.tablesModel = tables;
        }
    },

    actions: {
        async setTables(context, { dateTime }) {
            var date = await dateService.getByDate(dateTime);
            console.log(date,'Date is !')
            context.commit({ type: "setTables", date })
        },
        async initTablesModel(context) {
            var tables = await tableService.getTableModel();
            await context.commit({ type: 'initTablesModel', tables })
        },
        async updateDate(context ,{ newDate }){
            console.log(context,newDate)
            var date = dateService.update(newDate)
            return date;
        }, 
        async addDate(context , { newDate }){
            console.log('context' ,context)
            var date = dateService.add(newDate)
            return date;

        },
        
        

    },
    modules: {

    }
}
