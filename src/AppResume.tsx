import { useState } from 'react';
import './assets/styles/main.css';
import { AboutView, ContactView, ProfileView, ProjectView, ResumeView, SkillsView } from './views';

export enum TabsEnum {
  resume = 'resume',
  project = 'project',
  portfolio = 'portfolio',
}

const AppResume = () => {
  const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.resume);

  return (
    <div className='p-4 w-full mx-auto sm:max-w-2xl  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl'>
      <div className='grid gap-5 grid-cols-1 lg:grid-cols-3'>
        {/* TODO: Left */}
        <div className=''>
          <ProfileView />
          <SkillsView />
          <ContactView />
        </div>

        {/* FIXME: Right */}
        <div className='lg:col-span-2'>
          <AboutView activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === TabsEnum.resume && <ResumeView />}
          {activeTab === TabsEnum.project && <ProjectView />}
        </div>
      </div>
    </div>
  );
};

export default AppResume;
