import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tabs/Tabs';
import TabsHeader from '../common/tabs/TabsHeader';
import TabsContent from '../common/tabs/TabsContent';
import TabHeader from '../common/tabs/TabHeader';
import TabContent from '../common/tabs/TabContent';

import BillingCycleList from './BillingCycleList';
import BillingCycleForm from './BillingCycleForm';

// Actions Imports
import { init, create, update, remove } from '../billingCycle/billingCycleActions';

class BillingCycle extends Component {
  
  componentDidMount() {
    this.props.init();
  }
  
  render() {    
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamento" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" active="true" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Editar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <BillingCycleList />
              </TabContent>
              <TabContent id="tabCreate">
                <BillingCycleForm
                  onSubmit={this.props.create}
                  buttonLabel="Inlcuir"
                  buttonColor="primary" />
              </TabContent>
              <TabContent id="tabUpdate">
                <BillingCycleForm
                  onSubmit={this.props.update}
                  buttonLabel="Editar"
                  buttonColor="info" />
              </TabContent>
              <TabContent id="tabDelete">
                <BillingCycleForm
                  onSubmit={this.props.remove}
                  buttonLabel="Excluir"
                  buttonColor="danger"
                  readOnly={true} />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);