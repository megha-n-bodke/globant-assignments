import * as React from 'react';
import { connect } from 'react-redux';
import { loadUsers } from "./actions";
import '../card.css'
import Landing_page from '../openings/Landing_page';


class UsersWithReduxSaga extends React.Component {

    componentDidMount() {
        this.props.loadUsers();
    };

    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }


        if (this.props.error) {
            throw new Error("Something went wrong!!!!!!!!")
        }

        return (
            <>
                <Landing_page />
                <div className="card">
                    {this.props.data.map(u =>
                        <div className='cardContainer'>
                            <div key={u.id}>
                                <div className='role margin'>{u.role}</div>
                                <div>{u.technology}</div>
                                <div>{u.designation}/{u.experience} Yrs</div>
                            </div>
                        </div>

                    )}
                </div>

            </>
        );
    }
}

const mapStateToProps = state => ({
    data: state.jobopenings.data,
    loading: state.jobopenings.loading,
    error: state.jobopenings.error,
});

const mapDispatchToProps = {
    loadUsers
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersWithReduxSaga);
