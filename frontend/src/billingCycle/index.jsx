import React, { useState } from 'react';

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

const BillingCycle = () => {

  const [selectedTab, setSelectedTab] = useState('tabList');
  const [visibleTabs, setVisibleTabs] = useState(['tabList', 'tabCreate']);
  
  return (
    <div>
      <ContentHeader title="Ciclos de Pagamento" small="Cadastro" />
      <Content>
        <Tabs>
          <TabsHeader>
            <TabHeader
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              visibleTabs={visibleTabs}
              setVisibleTabs={setVisibleTabs}
              label="Listar"
              icon="bars"
              target="tabList"
              active="true" />
            <TabHeader
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              visibleTabs={visibleTabs}
              setVisibleTabs={setVisibleTabs}
              label="Incluir"
              icon="plus"
              target="tabCreate" />
            <TabHeader
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              visibleTabs={visibleTabs}
              setVisibleTabs={setVisibleTabs}
              label="Editar"
              icon="pencil"
              target="tabUpdate" />
            <TabHeader
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              visibleTabs={visibleTabs}
              setVisibleTabs={setVisibleTabs}
              label="Excluir"
              icon="trash-o"
              target="tabDelete" />
          </TabsHeader>

          <TabsContent>
            <TabContent selectedTab={selectedTab} id="tabList">
              <BillingCycleList />
            </TabContent>
            <TabContent selectedTab={selectedTab} id="tabCreate">
              <BillingCycleForm
                buttonLabel="Inlcuir"
                buttonColor="primary" />
            </TabContent>
            <TabContent selectedTab={selectedTab} id="tabUpdate">
              <h2>Update</h2>
              {/* <BillingCycleForm
                onSubmit={this.props.update}
                buttonLabel="Editar"
                buttonColor="info" /> */}
            </TabContent>
            <TabContent selectedTab={selectedTab} id="tabDelete">
              <h2>Delete</h2>
              {/* <BillingCycleForm
                onSubmit={this.props.remove}
                buttonLabel="Excluir"
                buttonColor="danger"
                readOnly={true} /> */}
            </TabContent>
          </TabsContent>
        </Tabs>
      </Content>
    </div>
  );
}

export default BillingCycle;