// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    labcomplaint: {
        'Get started': [
            'overview',
            'usecaseoverview',
        ],
        
        '1. Agent Workspace': [
            'exercise_1/overview',
            'exercise_1/configure',
        ],
        
        '2. Complaint App Demo': [
            'exercise_2/overview',
            'exercise_2/csm-portal',
            'exercise_2/csm-agent',
        ],

        '3. Configure Complaint App': [
            'exercise_3/overview',
            'exercise_3/configure-form',
            'exercise_3/configure-playbook',
        ],

        '4. Create Investigations App': [
            'exercise_4/overview',
            'exercise_4/create-app',
            'exercise_4/create-data-model',
        ],

        'Review': [
            'review',
        ],
    }
};

module.exports = sidebars;