import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateAnnouncement } from "../src/states/announcement/actions";
import { TextComponent } from '../src/components/atoms/Text.component'
import fetch from "isomorphic-unfetch";
import '../src/scss/style.scss'

interface IProps {
  announcementMessage: boolean;
  updateAnnouncement: any;
}

interface IState {}

class IndexPage extends React.Component<IProps, IState> {
  static async getInitialProps() {
    const res = await fetch("https://testapi.io/api/ddiasfront//biblioteca");
    const images = await res.json();
    return images;
  }

  render() {
    const { announcementMessage, updateAnnouncement } = this.props;
    console.log(this.props);
    return (
      <div>
        <TextComponent styleClass="announcement">Announcement:</TextComponent> {announcementMessage}
        <button onClick={() => updateAnnouncement("We are closed today!")}>
          Close!
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  announcementMessage: state.announcement.message
});

const mapDispatchToProps = (dispatch: any) => ({
  updateAnnouncement: bindActionCreators(updateAnnouncement, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
