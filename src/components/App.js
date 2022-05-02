import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

//Kada Komuniciramo od parenta ka childu koristimo prop sistem
//Kada Komuniciramo od childa ka parentu koristimo callback funkciju

class App extends React.Component {
    //znamo da ce vratiti array tako da odma postavimo na array
    state = { videos: [], selectedVideo: null};

    //default search after load page
    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    // Gledamo da se requestovi pozivaju iz App da ne bi mesali u componente
    // Componente bi trebalo da budu same za sebe
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params : {
                q: term // q zato sto u youtube api dokumentaciji tako pise
            }
        });

        //objekat koji vrati api je veliki zanima nas samo data.items
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onVFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelected={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;