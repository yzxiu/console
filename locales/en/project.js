/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

module.exports = {
  CLUSTER: 'Cluster',
  CLUSTER_PL: 'Clusters',
  CLUSTER_VALUE: 'Cluster: {value}',
  ADD_QUOTA: 'Add Quota',
  'Are you sure to disable it?': 'Are you sure to disable it?',
  ASSIGN_WORKSPACE: 'Assign Workspace',
  SELECT_WORKSPACE_DESC: 'Select a workspace.',
  Closed: 'Closed',
  DEFAULT_CONTAINER_QUOTAS: 'Default Container Quotas',
  EDIT_DEFAULT_CONTAINER_QUOTAS: 'Edit Default Container Quotas',
  CREATE_MULTI_CLUSTER_PROJECT: 'Create Multi-cluster Project',
  CREATE_PROJECT: 'Create Project',
  cronjobs: 'cronjobs',
  DaemonSet: 'DaemonSet',
  daemonsets: 'daemonsets',
  'Default limit resource': 'Default limit resource',
  'default request CPU should not be greater than default limit CPU':
    'default request CPU should not be greater than default limit CPU',
  'default request memory should not be greater than default limit memory':
    'default request memory should not be greater than default limit memory',
  'Default request resource': 'Default request resource',
  'Delete Project': 'Delete Project',
  Deleting: 'Deleting',
  Deployment: 'Deployment',
  deployments: 'deployments',
  Details: 'Details',
  'DevOps Projects': 'DevOps Projects',
  DISK_LOG_COLLECTION: 'Disk Log Collection',
  COLLECT_LOGS_ON_VOLUMES: 'Collect Logs on Volumes',
  'Disk Log Collection of the project is about to be disabled.':
    'Disk Log Collection of the project is about to be disabled.',
  'Edit Gateway': 'Edit Gateway',
  'Edit Project': 'Edit Project',
  'Edit Project Quota': 'Edit Project Quota',
  'Edit Resource Default Request': 'Edit Resource Default Request',
  'Empty value means no limit, CPU 1 Core = 1000m':
    'Empty value means no limit, CPU 1 Core = 1000m',
  'Enter DevOps Project': 'Enter DevOps Project',
  'Enter Project': 'Enter Project',
  FED_HOST_NAMESPACE_TIP:
    'Do not change resources in this project because it is related to a multi-cluster project.',
  'Gateway Info': 'Gateway Info',
  'Gateway Not Set': 'Gateway Not Set',
  'Help Information': 'Help Information',
  HOW_TO_INVITE_USERS: 'How do I invite users to the current project?',
  HOW_TO_SET_PROJECT_GATEWAY: 'How do I set the project gateway?',
  'Invalid project name': 'Invalid project name',
  'Invite Member': 'Invite Member',
  'Invite Members to the DevOps Project':
    'Invite Members to the DevOps Project',
  'Invite Members to the Project': 'Invite Members to the Project',
  jobs: 'jobs',
  'limits.cpu': 'limits.cpu',
  'limits.memory': 'limits.memory',
  LoadBalancer: 'LoadBalancer',
  'Manage Project': 'Manage Project',
  'Member Name': 'Member Name',
  Members: 'Members',
  'Members Management': 'Members Management',
  'Modify Member Role': 'Modify Member Role',
  'Modify Members Role': 'Modify Members Role',
  'Multi-cluster Project': 'Multi-cluster Project',
  MULTI_CLUSTER_PROJECT: 'Multi-cluster Project',
  MULTI_CLUSTER_PROJECT_LOW: 'multi-cluster project',
  MULTI_CLUSTER_PROJECT_PL: 'Multi-cluster Projects',
  'Multi-cluster Projects': 'Multi-cluster Projects',
  MULTI_CLUSTER_PROJECT_DELETE_TIP:
    'Deleting a multi-cluster project will also delete the same project on the host cluster.</br>Please enter the {type} name <strong>{resource}</strong> to make sure you understand the risk of the operation.',
  'No Platform Manage Authorization': 'No Platform Manage Authorization',
  'Not Assigned': 'Unassigned',
  Opened: 'Opened',
  'Please input project name': 'Please input project name',
  pods: 'pods',
  'Project Info': 'Project Information',
  PROJECT_ADMINISTRATOR: 'Project Administrator',
  'Project Member': 'Project Member',
  PROJECT_MEMBER_PL: 'Project Members',
  'project members': 'project members',
  PROJECT_NAME: 'Project Name',
  'Project name exists': 'Project name exists',
  PROJECT_NAME_EXISTS_IN_HOST:
    'The project name already exists in the host cluster. Please use another project name.',
  'Project Overview': 'Project Overview',
  'Project Placement': 'Project Placement',
  'Project Quota': 'Project Quota',
  EDIT_PROJECT_QUOTAS: 'Edit Project Quotas',
  'Project Role': 'Project Role',
  // Create ServiceAccount Page
  PROJECT_ROLE_SI: 'Project Role',
  PROJECT_ROLE_PL: 'Project Roles',
  PROJECT_QUOTAS_NOT_SET: 'Project Quotas Not Set',
  DEFAULT_CONTAINER_QUOTAS_NOT_SET: 'Default Container Quotas Not Set',
  Project_Admin: 'Project_Admin',
  Projects: 'Projects',
  projects: 'projects',
  'Quota Management': 'Quota Management',
  REMOVE_MEMBER: 'Remove Member',
  WORKSPACE_QUOTA_PL: 'Workspace Quotas',
  'Remove Member': 'Remove Member',
  'Remove Members': 'Remove Members',
  'requests.cpu': 'requests.cpu',
  'requests.memory': 'requests.memory',
  RESOURCE_QUOTAS: 'Resource Quotas',
  RESOURCE_TYPE: 'Resource Type',
  PROJECT_ADMINISTRATOR_DESC:
    'Select a user in the workspace as the project administrator.',
  'Select Project Type': 'Select Project Type',
  SELECT_CLUSTER_DESC:
    'Select the cluster in which the project is to be created.',
  CLUSTER_EMPTY_DESC: 'Please select a cluster.',
  'Set Gateway': 'Set Gateway',
  StatefulSet: 'StatefulSet',
  statefulsets: 'statefulsets',
  'Target Workspace': 'Target Workspace',
  Terminating: 'Terminating',
  Usage: 'Usage',
  USAGE: 'Usage',
  Volume: 'Volume',
  'Number of volumes': 'Number of volumes',
  RESOURCE_QUANTITY_LIMIT: 'Resource quantity limit',

  FEDPROJECT_CANNOT_ADD_CLUSTER: 'No cluster can be added.',

  PROJECTS_DESC:
    'A project is a Kubernetes namespace in KubeSphere, which provides a mechanism to organize resources in a workspace.',
  CREATE_PROJECT_DESC:
    'Create a project to group resources and control the resource management permissions of different users.',
  PROJECT_ADVANCE_DESC: 'Set the default resource request of the project',
  PROJECT_NAME_DESC:
    'The name can contain only lowercase letters, numbers, and hyphens (-), must start with a lowercase letter, and must end with a lowercase letter or number. The maximum length is 63 characters.',
  PROJECT_NAME_INVALID_DESC:
    'Invalid name. The name can contain only lowercase letters, numbers, and hyphens (-), must start with a lowercase letter, and must end with a lowercase letter or number. The maximum length is 63 characters.',
  PROJECT_BASEINFO_DESC: 'Project basic information settings',

  PROJECT_TYPES_PROJECT_TITLE: 'Create a resource project',
  PROJECT_TYPES_PROJECT_DESC:
    'The project in KubeSphere corresponds to the Kubernetes namespace, which is an abstract collection of a set of resources and objects that can be grouped according to different business units or product projects.',
  PROJECT_TYPES_DEVOPS_TITLE: 'Create a DevOps project',
  PROJECT_TYPES_DEVOPS_DESC:
    'Build and test software projects continuously and automatically.',

  PROJECT_ASSIGN_DESC:
    'After the project is assigned to a workspace, the workspace cannot be changed.',

  INVITE_MEMBER_DESC: 'You can invite new members to assist in your project.',
  INVITE_MEMBER_DESC_DEVOPS:
    'You can invite new members to assist your DevOps project.',
  INVITE_MEMBER_SEARCH_PLACEHODLER: 'Enter a username to invite members',
  ASSIGN_ROLE: 'Assign a Role to the Member',
  DELETE_MEMBER_TIP:
    'Are you sure about deleting the member <strong>{name}</strong>? The member cannot access this project once removed.',

  PROJECT_ADMIN_DESC:
    'You can specify a member of the project as an administrator.',

  PROJECT_INTERNET_ACCESS_DESC:
    'Before creating a route, you need to enable the Internet access portal (i.e. the gateway). This step is to create a corresponding routing controller to forward the request to the corresponding backend Service.',
  DELETE_INTERNET_ACCESS_TITLE:
    'Are you sure about deleting the external network access settings?',
  DELETE_INTERNET_ACCESS_DESC: 'You can rebind after the deletion.',

  NO_RELATE_PROJECTS_TITLE: 'No project associated with you',
  NO_RELATE_PROJECTS_DESC:
    'You can create or contact the project manager to invite you to the project to start your work.',

  DELETE_PROJECT_TIP:
    'Are you sure about deleting the project <strong>{resource}</strong>? After the deletion, you will not be able to recover it, and the resources under the project will also be destroyed.',

  DEFAULT_RESOURCE_UNIT_DESC:
    'The value of CPU indicates the number of CPU cores when it has no unit. 1 Core = 1000m',
  DEFAULT_RESOURCE_ALERT:
    'When you create a workload, this setting will be used by default if the resource limit and request for the workload are not set. If there is no special requirements, please keep this default setting unchanged.',

  QUOTA_EDIT_TIP:
    'If the value is empty, the resource quota will not be limited.',

  HOW_TO_USE_QUOTA_Q: 'How do I use quotas?',
  HOW_TO_USE_QUOTA_A:
    "Resource Quotas are a mechanism used to limit user's resources usage. You can limit the number of CPUs, memories, and Pod replicas.",
  PROJECT_QUOTAS_DESC:
    'Project quotas specify the number of available CPU and memory resources and the maximum number of Pods, Deployments, and Services allowed in the project.',

  WHAT_IS_LIMIT_RANGE_Q: 'What is the container resource default request?',
  WHAT_IS_LIMIT_RANGE_A:
    'The container resource default request (LimitRange) is based on project resource management, including resource limits and resource requests.',
  DEFAULT_CONTAINER_QUOTAS_DESC:
    'Default container quotas specify the default CPU request, CPU limit, memory request, and memory limit of containers created in the project.',
  WHAT_IS_INTERNET_GATEWAY: 'What is an Internet Access Gateway?',
  WHAT_IS_COLLECT_FILE_LOG_A:
    'The log path in the volume mounted to the container is given in glob pattern. The log path can be configured in the workload to collect logs. The administrator needs to enable Disk Log Collection in advance.',

  HOW_TO_INVITE_MEMBER_Q: 'How to invite members?',
  HOW_TO_INVITE_MEMBER_A:
    'Project administrators or users with member invitation privileges can invite members of the current workspace to join the project.',

  CLOSE_FILE_LOG_TIP:
    'Disk Log Collection will be turned off. After it is disabled, the service with this function enabled will not stop collecting disk logs until Pod replicas restart. </br>If you need to collect them again, please enable Disk Log Collection and restart the Pod.',
  COLLECTING_FILE_LOG_DESC:
    'Disk logs in the container will be collected and exported to stdout, which will then be collected by the system log collector together.',

  PROJECT_BASIC_INFO_DESC:
    "The project basic information includes the project name and the project's quota status.",
  PROJECT_QUOTA_MANAGE_DESC: 'This module allows you to manage project quotas.',
  PROJECT_ROLE_DESC:
    'Project roles define the permissions users have in the current project.',
  PROJECT_MEMBERS_DESC: 'Manage and assign roles for project members.',
  PROJECT_ADVANCED_SETTINGS_DESC:
    'This module allows you to configure gateway access for external addresses and service governance. Besides, you can also configure the collection of logs on the disk.',

  PROJECT_TYPES_Q:
    'How can the services in the project be accessed through the external network?',
  PROJECT_TYPES_A:
    'The project gateway is responsible for creating the corresponding application routing controller to forward the request to the corresponding backend Service. After the project gateway is opened, the service can be exposed to the external network through Ingress.',

  PROJECT_NAME_EXISTS_IN_CLUSTER:
    'The project name already exists in the {cluster} cluster. Please use another project name.',

  PROJECT_CLUSTER_SETTINGS_DESC:
    'Select at least one cluster for the project. If you select multiple clusters, a project with the same name will be created in the host cluster.',
  NETWORK_ISOLATED_DESC: 'Set network isolation strategy',

  FEDPROJECT_RESOURCE_TIP:
    'Unable to create multi-cluster project resources in cluster management, please go to the multi-cluster project page to operate.',
  FEDPROJECT_CANNOT_DEPLOY_APP_TIP:
    'The app cannot be deployed in a multi-cluster project.',
  MULTI_CLUSER_PROJECT_TIP:
    'The current multi-cluster project runs on different clusters. You can switch between clusters to check the setting of this project in each of them.',

  MULTI_CLUSER_RESOURCE_TIP:
    'The current multi-cluster resource runs on different clusters. You can switch between clusters to check the setting of this resource in each of them.',

  CREATE_MULTI_CLUSTER_PROJECT_DESC:
    'A multi-cluster project runs across different clusters, which helps you to build a container environment for rapid iteration of applications and achieve high availability.',
}
