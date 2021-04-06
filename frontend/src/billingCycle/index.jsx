import React, { Component } from 'react';

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tabs/Tabs';
import TabsHeader from '../common/tabs/TabsHeader';
import TabsContent from '../common/tabs/TabsContent';
import TabHeader from '../common/tabs/TabHeader';

class BillingCycle extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamento" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Editar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

export default BillingCycle;