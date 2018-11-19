import React, {Component} from 'react';
import AddressList from './AddressList';

class AdressPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            address: "",
            phone: "",
            addressList: []
        }
    }

    handleChange(obj) {

        this.setState({
            [obj.target.name]: obj.target.value
        })
    }

    addAddress() {
        const {name, address, phone, addressList} = this.state;

        let list = addressList;

        list.push({
            name: name,
            address: address,
            phone: phone
        });

        this.setState({
            addressList: list,
            name: "",
            address: "",
            phone: ""
        })
    }

    removeAndUpdate = (item)=>{

        let newList = this.state.addressList.filter(f => f.phone !== item.phone);

        this.setState({
            addressList: newList
        })

    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div className="addresses">

                    <div className="div-span">
                        <span>Name Surname</span>
                        <span>Adress</span>
                        <span>Phone Number</span>
                    </div>
                    <div className="form-input">
                        <input type="text" name="name" placeholder="Enter Name Surname" value={this.state.name}
                               onChange={(e) => this.handleChange(e)}/>
                        <input type="text" name="address" placeholder="Enter Address" value={this.state.address}
                               onChange={(e) => this.handleChange(e)}/>
                        <input type="text" name="phone" placeholder="Enter Phone Number" value={this.state.phone}
                               onChange={(e) => this.handleChange(e)}/>
                    </div>
                </div>
                <div>
                    <button className="btn-add" onClick={() => this.addAddress()}>Add</button>
                </div>
                <AddressList addressList={this.state.addressList} removeAndUpdate={this.removeAndUpdate}/>

            </React.Fragment>
        );
    }

}

export default AdressPanel;