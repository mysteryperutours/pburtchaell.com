#!/bin/bash

# This script can be used to generate files for a component.

ROOT_DIR="./app/components"
COMPONENT_FILENAME="index.js"
STYLES_FILENAME="styles.css"
TESTS_FILENAME="index.spec.js"

# Step 1: Get the name
echo "What is the component name (capitalized and in CamelCase)?"
read COMPONENT_NAME

# Make the directory name lowercase
COMPONENT_DIRECTORY=`echo $COMPONENT_NAME |cut -c1 |tr '[:upper:]' '[:lower:]'``echo $COMPONENT_NAME |cut -c2-`

# Step 1: Create folder for component
mkdir $ROOT_DIR/$COMPONENT_DIRECTORY

# Step 2a: Create component file
touch $ROOT_DIR/$COMPONENT_DIRECTORY/$COMPONENT_FILENAME

# Step 2b: Add initial component code
cat > $ROOT_DIR/$COMPONENT_DIRECTORY/$COMPONENT_FILENAME <<- COMPONENT_EOF
import React from 'react';

const $COMPONENT_NAME = (props) => (
  <div>
    {props.children}
  </div>
);

export default $COMPONENT_NAME;
COMPONENT_EOF

echo "Created $ROOT_DIR/$COMPONENT_DIRECTORY/$COMPONENT_FILENAME..."

# Step 3: Create styles file
touch $ROOT_DIR/$COMPONENT_DIRECTORY/$STYLES_FILENAME
echo "Created $ROOT_DIR/$COMPONENT_DIRECTORY/$STYLES_FILENAME..."

# Step 4a: Create tests file
touch $ROOT_DIR/$COMPONENT_DIRECTORY/$TESTS_FILENAME

# Step 4b: Add initial tests code
cat > $ROOT_DIR/$COMPONENT_DIRECTORY/$TESTS_FILENAME <<- TESTS_EOF
import React from 'react';
import $COMPONENT_NAME from './index';

describe($COMPONENT_NAME.name, () => {
  it('should render component', () => {
    expect(shallow(
      <$COMPONENT_NAME />
    )).toMatchSnapshot();
  });
});
TESTS_EOF

echo "Created $ROOT_DIR/$COMPONENT_DIRECTORY/$TESTS_FILENAME..."

exit 0;
