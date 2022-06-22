import React from 'react';
import Dialog from '../misc/Dialog';
import { Glyphicon } from 'react-bootstrap';
import Message from '../I18N/Message';
import Button from '../misc/Button';
import PropTypes from 'prop-types';

class  VersionDialog extends React.Component {

    static propTypes = {
        visible: PropTypes.bool,
        toggleControl: PropTypes.func,
        closeGlyph: PropTypes.string,
        show: PropTypes.bool,
        closeModal: PropTypes.func,
        version: PropTypes.string
    }
    static defaultProps = {
        visible: false,
        toggleControl: () => {},
        closeGlyph: "1-close"
    };
    render() {
        const githubUrl = "https://github.com/geosolutions-it/MapStore/tree/" + __COMMITHASH__;
        return (
            <div key={this.props.show} style={{ background: 'gba(0, 0, 0, 0.5)'}}>
                {this.props.show  && <Dialog id="mapstore-about" style={{position: 'absolute', top: '90px'}}>
                    <div key="header" role="header">
                        <Message key="title" msgId="version.label"/>
                        <button key="close" onClick={this.props.toggleControl} className="close">{this.props.closeGlyph ? <Glyphicon glyph={this.props.closeGlyph}/> : <span>×</span>}</button>
                    </div>
                    <div key="body" role="body">
                        <ul style={{listStyleType: 'none'}}>
                            <li>
                                <span className="application-version"><span className="application-version-label"><Message msgId="version.label"/></span>:{this.props.version}</span>;
                            </li>
                            <li>
                                <span className="value-git commit-data" dangerouslySetInnerHTML={{ __html: __COMMIT_DATA__
                                    .replace("Message:", "<strong>Message:</strong>")
                                    .replace("Author:", "<br/><strong>Author:</strong>")
                                    .replace("Date:", "<br/><strong>Date:</strong>")
                                    .replace("Commit:", "<br/><strong>Commit:</strong>")
                                }}>
                                </span>

                            </li>
                            <li style={{marginTop: '22px'}}>
                                <span><a href={githubUrl} target="_blank" ><Button> Open github tree in a new tab </Button></a></span>
                            </li>
                        </ul>
                    </div>
                </Dialog>}
            </div>
        );

    }

}

export default VersionDialog;
