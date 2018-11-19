import React, {Component} from 'react';

class AddressList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            address: "",
            phone: "",
            checkEdit: null,
            list: []
        }
    }

    componentDidMount() {
        this.setState({
            list: this.props.addressList
        })
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            list: nextProps.addressList
        })
    }

    editAddress(item) {

        const {name, address, phone} = item;

        this.setState({
            checkEdit: phone,
            name: name,
            address: address,
            phone: phone
        })
    }

    handleChange(val){
        this.setState({
            [val.target.name]:val.target.value
        })
    }

    itemUpdate(item){
        const { list } = this.state;

        let newList = list.map(f => {
            if(f.phone === item.phone){
                f.phone = this.state.phone;
                f.name = this.state.name;
                f.address = this.state.address;
            }
            return f;
        });

        // console.log("new list", newList);

        this.setState({
            list: newList
        });
    }

    renderEdit(item) {

        if (this.state.checkEdit === item.phone) {
            return (
                <div>
                    <div className="addresses">

                        <div className="div-span">
                            <span>Name Surname</span>
                            <span>Adress</span>
                            <span>Phone Number</span>
                        </div>
                        <div className="form-input">
                            <input type="text" name="name" value={this.state.name} defaultValue={item.name}
                                   onChange={(e) => this.handleChange(e)}/>
                            <input type="text" name="address" value={this.state.address} defaultValue={item.address}
                                   onChange={(e) => this.handleChange(e)}/>
                            <input type="text" name="phone" value={this.state.phone} defaultValue={item.phone}
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </div>
                    <div>
                        <button className="btn-add" onClick={() => this.itemUpdate(item)}>Update</button>
                    </div>

                </div>

            );
        }

        return null;


    }

    removeAddress(item) {

        let newList = this.state.list.filter(f => f.phone !== item.phone);

        this.setState({
            list: newList
        })

        this.props.removeAndUpdate(item);

    }

    removeAndUpdate=()=>{

    }

    renderList() {
        const {list} = this.state;

        return list.map((item, i) => {
            return <div key={i} className="list">
                <hr/>
                <div className="address-list">
                    <div className="address-list-span">
                        <span>Name Surname :</span>
                        <span>Adress :</span>
                        <span>Phone Number :</span>
                    </div>
                    <div className="address-list-content">
                        <span>{item.name}</span>
                        <span>{item.address}</span>
                        <span>{item.phone}</span>
                    </div>
                    <div className="address-list-btn">
                        <button className="btn-edit" onClick={() => this.editAddress(item)}>Edit</button>
                        <button className="btn-delete" onClick={() => this.removeAddress(item)}>Delete</button>
                    </div>
                </div>
                {this.renderEdit(item)}

            </div>

        })
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <h3>Address List</h3>
                {this.renderList()}
            </React.Fragment>
        );
    }
}

export default AddressList;