import { useState } from 'react';
import './assets/styles/main.css';
import { ExperienceView, ProfileView, EducationView, ProjectView, SkillsView, InfoView, AboutView, ResumeView } from './views';

export enum TabsEnum {
  resume = 'resume',
  project = 'project',
  portfolio = 'portfolio',
}

function App() {
  const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.resume);

  return (
    <div className='p-4 w-full mx-auto sm:max-w-2xl  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl'>
      <div className='grid gap-5 lg:grid-cols-3'>
        {/* TODO: Left */}
        <div>
          <ProfileView />
          <SkillsView />
          <InfoView />
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
}

export default App;
