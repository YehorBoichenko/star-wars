'use client';

import React from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import Text from '@/components/ui/text';

/**
 * Props for the CharacterNode component.
 * Extends ReactFlow's NodeProps to include a data property with a label.
 */
interface CharacterNodeProps extends NodeProps {
  data: {
    /** Label to display inside the node */
    label: string;
  };
}

/**
 * A React Flow node component that represents a character.
 *
 * @param props - The props for the CharacterNode component, including data with a label.
 * @returns JSX.Element
 */
const CharacterNode: React.FC<CharacterNodeProps> = ({ data }) => {
  return (
    <div className="person-node bg-gray-800 text-white shadow-lg shadow-gray-500 p-4 rounded-lg hover:shadow-2xl transition-shadow duration-300">
      <div>
        <Text className="text-lg font-bold text-white">{data.label}</Text>
      </div>
      <Handle type="source" position={Position.Bottom} className="handle-source" />
    </div>
  );
};

export default CharacterNode;
