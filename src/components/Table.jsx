import React from "react";
import Person from "./person/Person";

class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         data: [
            {id:123, name: 'Bosis', phone: '987654321', career: 'it', email:'504@gmail.com', meeting: '20.12 - 12:00'},
            {id:124, name: 'Osis', phone: '987654354', career: 'it', email:'5024@gmail.com', meeting: '25.12 - 12:00'},
            {id:125, name: 'Sisis', phone: '987654378', career: 'it', email:'5104@gmail.com', meeting: ''},
            {id:126, name: 'Dosis', phone: '987654396', career: 'it', email:'5304@gmail.com', meeting: ''},
         ]
      }
   }

   onValueChange = (id, value) => {
      this.setState(({data}) => {
         const item = data.find(item => item.id === id);
         const newItem = {...item, meeting: value};
         const index = data.indexOf(item);
         const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1, data.length)];
         return {
            data: newData
         }

      });
   }

   render () {
      const {data} = this.state;
      const personList = data.map(item => {
         return <Person {...item} key={item.id} onValueChange={(id, value) => this.onValueChange(id, value)}/>
      }); 

      return (
         <table className="responsive-table">
           <thead>
             <tr>
                 <th>Name</th>
                 <th>Phone</th>
                 <th>Career</th>
                 <th>e-mail</th>
                 <th>Meeting</th>
             </tr>
           </thead>
           <tbody>
               {personList}
           </tbody>
         </table>
      );
   }
}
     
export default Table;