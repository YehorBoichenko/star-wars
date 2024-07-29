import { type EdgeTypes, type NodeTypes } from 'reactflow';
import { MovieNode, CharachterNode, ShipNode } from '@/components/cards/details/nodes/index';

/**
 * Defines custom edge types for the React Flow diagram.
 * Currently, there are no custom edge types defined.
 *
 * @remarks
 * This constant satisfies the `EdgeTypes` interface from React Flow.
 */
export const edgeTypes = {} satisfies EdgeTypes;

/**
 * Defines custom node types for the React Flow diagram.
 * Maps node types to their corresponding React components.
 *
 * @remarks
 * This constant satisfies the `NodeTypes` interface from React Flow.
 *
 * @example
 * ```typescript
 * nodeTypes['character-node']; // Returns CharachterNode component
 * nodeTypes['movie-node']; // Returns MovieNode component
 * nodeTypes['ship-node']; // Returns ShipNode component
 * ```
 */
export const nodeTypes = {
  'character-node': CharachterNode,
  'movie-node': MovieNode,
  'ship-node': ShipNode
} satisfies NodeTypes;
