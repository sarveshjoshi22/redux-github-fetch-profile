import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRepos, clearRepos} from '../actions/repoActions';

class Home extends Component {
    state = {username: ''};

    updateRepoList = username => this.props.getRepos(username);

    render() {
        return (
            <div className="container">
                <h2 className="m-5">
                    <i className="fab fa-github m-2"/>
                    GitHub Finder
                </h2>
                <form className="col-lg-6 offset-lg-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <input
                                className="form-control"
                                type="text"
                                value={this.state.username}
                                onChange={e => this.setState({username: e.target.value})}
                                placeholder="Enter GitHub username"
                            />
                        </div>
                    </div>
                </form>
                <button
                    className="btn btn-dark mt-4"
                    onClick={() => this.updateRepoList(this.state.username)}>
                    Get Repositories
                </button>
                <button
                    className="btn btn-danger ml-2 mt-4"
                    onClick={() => this.props.clearRepos()}>
                    Reset
                </button>
                {
                    Array.isArray(this.props.repos) ? (<ul>
                        {this.props.repos.map((repo, index) => (
                                <div key={index} className="list-group mt-4">
                                    <a
                                        href={repo.html_url}
                                        target="_blank" rel="noopener noreferrer"
                                        className="list-group-item list-group-item-action">
                                        {repo.name}
                                    </a>
                                </div>
                            )
                        )}
                    </ul>) : (<p className="mt-2 text-danger">Please enter valid GitHub Repository</p>)
                }
            </div>
        );
    }
}

// AppContainer.js
const mapStateToProps = (state) => ({repos: state.repos.repoList});

export default connect(mapStateToProps, {getRepos, clearRepos})(Home);

