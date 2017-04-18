import React from 'react';
import {
  Table
} from 'react-bootstrap';
import BossmodeCGM from '@bossmodecg/management-react';

export default class ClienteleMonitor extends BossmodeCGM.Components.Widget {
  constructor(props) {
    super(props);

    this.setWidgetOptions({
      title: "Active Clients",

      lookAndFeel: 'panel',
      panelStyle: 'red'
    });
  }

  _renderWidget() {
    const client = this.props.bossmodecgClient;

    const clientele = client.module("clientele");

    const authedClients =
      Object.values(clientele.state.authenticatedClients || {})
            .filter((authedClient) => authedClient != null);

    return (
      <div style={{ height: '16rem', overflow: 'scroll' }}>
        <Table responsive striped condensed hover>
          <thead>
            <tr>
              <th>Identifier</th>
              <th>Client Type</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {
              authedClients.map((c) =>
                <tr key={ c.id }>
                  <td>{ c.identifier }</td>
                  <td>{ c.clientType }</td>
                  <td>{ c.address }</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
