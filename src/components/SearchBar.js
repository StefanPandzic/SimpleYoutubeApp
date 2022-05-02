import React from "react";

class SearchBar extends React.Component {
    state = { term: ''};

    //Ne zaboravimo event objekat koji se salje 
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        //ovo je da se ne refreshuje browser automatski zbog form submita
        event.preventDefault();
        
        // Call calback from parent component
        this.props.onVFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;