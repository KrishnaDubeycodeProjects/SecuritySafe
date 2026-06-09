import type { FamilyMember } from './types';

export const familyMembers: FamilyMember[] = [
  {
    id: 'fm-001',
    name: 'You',
    relation: 'self',
    isSenior: false,
    isChild: false,
    threatCount: 3,
    safeScore: 7,
    lastActive: '2025-12-23T10:30:00Z',
    isOnline: true,
  },
  {
    id: 'fm-002',
    name: 'Father',
    relation: 'parent',
    age: 62,
    isSenior: true,
    isChild: false,
    threatCount: 5,
    safeScore: 4,
    lastActive: '2025-12-22T18:15:00Z',
    isOnline: false,
  },
  {
    id: 'fm-003',
    name: 'Mother',
    relation: 'parent',
    age: 58,
    isSenior: true,
    isChild: false,
    threatCount: 2,
    safeScore: 5,
    lastActive: '2025-12-23T09:00:00Z',
    isOnline: false,
  },
  {
    id: 'fm-004',
    name: 'Younger Brother',
    relation: 'sibling',
    age: 16,
    isSenior: false,
    isChild: true,
    threatCount: 1,
    safeScore: 8,
    lastActive: '2025-12-22T22:00:00Z',
    isOnline: true,
  },
];

export function getFamilyRiskSummary(): { seniorCount: number; childCount: number; totalThreats: number; averageScore: number } {
  const seniors = familyMembers.filter((m) => m.isSenior && m.relation !== 'self').length;
  const children = familyMembers.filter((m) => m.isChild && m.relation !== 'self').length;
  const totalThreats = familyMembers.reduce((sum, m) => sum + m.threatCount, 0);
  const averageScore = Math.round(
    familyMembers.reduce((sum, m) => sum + m.safeScore, 0) / familyMembers.length
  );
  return { seniorCount: seniors, childCount: children, totalThreats, averageScore };
}
