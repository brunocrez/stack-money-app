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

import { showTabs } from '../common/tabs/tabsActions';

class BillingCycle extends Component {
  
  componentDidMount() {
    this.props.showTabs('tabList', 'tabCreate');
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
              <TabContent id="tabList"><h1>Lista</h1></TabContent>
              <TabContent id="tabCreate"><h1>Criar</h1></TabContent>
              <TabContent id="tabUpdate"><h1>Editar</h1></TabContent>
              <TabContent id="tabDelete"><h1>Deletar</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ showTabs }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);