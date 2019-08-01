const initialdata ={
    cards:{
        'card-1':{id :'card-1' ,content:'find a hotel'},
        'card-2':{id :'card-2' ,content:'book flights'},
        'card-3':{id :'card-3' ,content:'call friend'},
        'card-4':{id :'card-3' ,content:'find workplace'},
        'card-5':{id :'card-3' ,content:'find coffeshop'}
        
    },
    coloumns:{
        'list-1':{
            id:'list-1',
            title:'Thing to do',
            cardid:['card-1','card-2','card-3']
        },
        'list-2':{
            id:'list-2',
            title:'Doing',
            cardid:['card-4']
        },
        'list-3':{
            id:'list-3',
            title:'Done',
            cardid:['card-5']
        },
        
        
    },
    columnOrder: ['list-1','list-2','list-3'],
}

export default initialdata;