import { type EdgeTypes, type NodeTypes } from 'reactflow';
import {
  MovieNode,
  CharachterNode,
  ShipNode,
} from '@/components/cards/details/nodes/index';

export const edgeTypes = {} satisfies EdgeTypes;

export const nodeTypes = {
  'character-node': CharachterNode,
  'movie-node': MovieNode,
  'ship-node': ShipNode,
} satisfies NodeTypes;
