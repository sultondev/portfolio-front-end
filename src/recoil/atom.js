import { atom } from 'recoil';
import { menuItems } from '../constants';
import { projectsData } from '../constants/projects.constant';
import { backEndData, frontEndData, extraSkillsData } from '../constants/skills.constant';

export const menuItemsData = atom({
	key: 'menuItemsData',
	default: menuItems
});

export const loadingStatus = atom({
	key: 'loadingStatus',
	default: true
});

export const frontEndSkillsData = atom({
	key: 'frontEndSkillsData',
	default: frontEndData
});

export const backEndSkillsData = atom({
	key: 'backEndSkillsData',
	default: backEndData
});

export const extraSkillsList = atom({
	key: 'extraSkillsData',
	default: extraSkillsData
});

export const activeMenuItemData = atom({
	key: 'activeMenuItemData',
	default: 1
});

export const PetProjectsData = atom({
	key: 'PetProjectsData',
	default: projectsData
});
