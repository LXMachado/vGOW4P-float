import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c20493c8-79be-43ba-a5ed-aa798a9a8ef9', '1Maymie57@yahoo.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=3', 'invitationToken5', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('fee24354-abe8-4a49-9a8a-1108fee8c2d9', '17Penelope61@hotmail.com', 'Bob Smith', 'https://i.imgur.com/YfJQV5z.png?id=19', 'invitationToken1', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('06ef8341-e873-458f-86f2-e50b490dd78b', '25Norval74@yahoo.com', 'Ethan Hunt', 'https://i.imgur.com/YfJQV5z.png?id=27', 'invitationToken5', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('d9c368c7-e4bd-499f-8351-67becebe2902', '33Rosemarie77@gmail.com', 'Ethan Hunt', 'https://i.imgur.com/YfJQV5z.png?id=35', 'invitationToken3', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('541bcd2a-3a05-4eb6-9472-090a8b9d065f', '41Carolanne_Gusikowski20@hotmail.com', 'Diana Prince', 'https://i.imgur.com/YfJQV5z.png?id=43', 'invitationToken3', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('8fee0fc1-73b9-490a-bd6b-ecede4634fe4', '49Thelma_Schumm25@gmail.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=51', 'invitationToken5', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a3580f0c-fdf7-4637-8944-b08901bc2be9', '57Sam.Orn90@gmail.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=59', 'invitationToken3', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('93c5b01a-d4d9-4c62-9814-7b3d9eb8b74d', '65Muriel60@yahoo.com', 'Ethan Hunt', 'https://i.imgur.com/YfJQV5z.png?id=67', 'invitationToken3', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('d6897d54-63f1-43dc-b903-94a31156c935', '73Zelma.Romaguera@gmail.com', 'Diana Prince', 'https://i.imgur.com/YfJQV5z.png?id=75', 'invitationToken1', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Category" ("id", "name", "description") VALUES ('4b9cf4dc-1477-4aa8-9a62-7f846ed70587', 'Sleep', 'A collection of calming soundscapes for relaxation.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('0a4ab951-57e4-430e-83f8-c649228ecb53', 'Mindfulness', 'Soothing sounds to help you fall asleep and stay asleep.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('d5085fc0-1965-4d3b-88de-592025ed1a60', 'Sleep', 'A collection of calming soundscapes for relaxation.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('2d012e6f-6c60-4c67-858f-941aaf3d0bf6', 'Focus', 'Soothing sounds to help you fall asleep and stay asleep.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('f1d56c27-ef30-4b8d-bbb5-a4d781af5354', 'Stress Relief', 'Music and sounds to enhance concentration and productivity.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('9a8ac8ce-68c4-4a7a-9b97-7e6882573224', 'Sleep', 'Guided sessions to cultivate awareness and presence.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('35a8d9fe-57b5-4ca6-b0fc-375c3ef9599b', 'Stress Relief', 'Music and sounds to enhance concentration and productivity.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('6a6df07e-14cd-4233-b3a7-66e0bcec33a2', 'Relaxation', 'Soothing sounds to help you fall asleep and stay asleep.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('ff259b98-09fa-4759-818a-fb4be2ac3898', 'Relaxation', 'Guided sessions to cultivate awareness and presence.');
INSERT INTO "Category" ("id", "name", "description") VALUES ('86f5c3de-ffae-41ed-8e3a-fd1138259a2b', 'Mindfulness', 'A collection of calming soundscapes for relaxation.');

INSERT INTO "Track" ("id", "title", "description", "duration", "audioUrl", "creatorName", "offlineEnabled", "categoryId") VALUES ('d0342926-2a08-4174-a07e-d0b1379d6bfd', 'Mindful Breathing Exercise', 'A gentle start to your day with calming sounds.', 850, 'https://i.imgur.com/YfJQV5z.png?id=114', 'Mindful Moments', true, '2d012e6f-6c60-4c67-858f-941aaf3d0bf6');
INSERT INTO "Track" ("id", "title", "description", "duration", "audioUrl", "creatorName", "offlineEnabled", "categoryId") VALUES ('fa0e755f-2fc3-4003-ace0-38ea5c498dc0', 'Peaceful Morning Meditation', 'A gentle start to your day with calming sounds.', 244, 'https://i.imgur.com/YfJQV5z.png?id=121', 'Stress Free', false, '35a8d9fe-57b5-4ca6-b0fc-375c3ef9599b');
INSERT INTO "Track" ("id", "title", "description", "duration", "audioUrl", "creatorName", "offlineEnabled", "categoryId") VALUES ('3c9b3bc0-c5d5-408a-8da5-e947f9c74b0e', 'Mindful Breathing Exercise', 'A gentle start to your day with calming sounds.', 418, 'https://i.imgur.com/YfJQV5z.png?id=128', 'Stress Free', false, '35a8d9fe-57b5-4ca6-b0fc-375c3ef9599b');
INSERT INTO "Track" ("id", "title", "description", "duration", "audioUrl", "creatorName", "offlineEnabled", "categoryId") VALUES ('1eb9d736-5244-4d0d-8579-d247ae747229', 'Focus and Clarity', 'Drift into a deep sleep with soothing melodies.', 966, 'https://i.imgur.com/YfJQV5z.png?id=135', 'Calm Vibes', false, '86f5c3de-ffae-41ed-8e3a-fd1138259a2b');
INSERT INTO "Track" ("id", "title", "description", "duration", "audioUrl", "creatorName", "offlineEnabled", "categoryId") VALUES ('18e854ec-be7e-4a3d-9fd3-c918994af4f1', 'Mindful Breathing Exercise', 'Drift into a deep sleep with soothing melodies.', 681, 'https://i.imgur.com/YfJQV5z.png?id=142', 'Focus Guru', false, '35a8d9fe-57b5-4ca6-b0fc-375c3ef9599b');
INSERT INTO "Track" ("id", "title", "description", "duration", "audioUrl", "creatorName", "offlineEnabled", "categoryId") VALUES ('62211780-c931-4fc9-9a95-71f478263c4a', 'Mindful Breathing Exercise', 'Release stress with this guided relaxation session.', 187, 'https://i.imgur.com/YfJQV5z.png?id=149', 'Stress Free', true, 'd5085fc0-1965-4d3b-88de-592025ed1a60');
INSERT INTO "Track" ("id", "title", "description", "duration", "audioUrl", "creatorName", "offlineEnabled", "categoryId") VALUES ('20701cea-731a-453a-b81e-a59faff4e1f0', 'Deep Sleep Relaxation', 'Drift into a deep sleep with soothing melodies.', 295, 'https://i.imgur.com/YfJQV5z.png?id=156', 'Stress Free', true, '35a8d9fe-57b5-4ca6-b0fc-375c3ef9599b');
INSERT INTO "Track" ("id", "title", "description", "duration", "audioUrl", "creatorName", "offlineEnabled", "categoryId") VALUES ('7508b841-170d-492a-bf77-0981f3a423fc', 'Mindful Breathing Exercise', 'Release stress with this guided relaxation session.', 164, 'https://i.imgur.com/YfJQV5z.png?id=163', 'Mindful Moments', true, '9a8ac8ce-68c4-4a7a-9b97-7e6882573224');
INSERT INTO "Track" ("id", "title", "description", "duration", "audioUrl", "creatorName", "offlineEnabled", "categoryId") VALUES ('03aa8999-4ea0-4007-9492-ab566e5431db', 'Stress Relief Journey', 'Drift into a deep sleep with soothing melodies.', 677, 'https://i.imgur.com/YfJQV5z.png?id=170', 'Stress Free', true, '9a8ac8ce-68c4-4a7a-9b97-7e6882573224');
INSERT INTO "Track" ("id", "title", "description", "duration", "audioUrl", "creatorName", "offlineEnabled", "categoryId") VALUES ('5957a4f2-be96-4667-bdbe-b113c88bb25f', 'Focus and Clarity', 'A gentle start to your day with calming sounds.', 359, 'https://i.imgur.com/YfJQV5z.png?id=177', 'Stress Free', false, '2d012e6f-6c60-4c67-858f-941aaf3d0bf6');

INSERT INTO "Playlist" ("id", "name", "description", "isPublic", "userId") VALUES ('83524c9b-9517-484e-9593-259bf527c3e3', 'Mindful Morning', 'Guided meditations for a restful nights sleep.', false, '06ef8341-e873-458f-86f2-e50b490dd78b');
INSERT INTO "Playlist" ("id", "name", "description", "isPublic", "userId") VALUES ('9d5a07f2-9da3-4315-aa2c-0144384f152d', 'Tranquil Moments', 'Relax and let go of stress with this soothing playlist.', true, 'd9c368c7-e4bd-499f-8351-67becebe2902');
INSERT INTO "Playlist" ("id", "name", "description", "isPublic", "userId") VALUES ('8c1d07a1-a025-41c8-80b3-ece49efebff7', 'Tranquil Moments', 'Enhance your concentration with these calming sounds.', true, 'd9c368c7-e4bd-499f-8351-67becebe2902');
INSERT INTO "Playlist" ("id", "name", "description", "isPublic", "userId") VALUES ('3eb41bda-847d-4a52-9eee-6a92178045ea', 'Tranquil Moments', 'Relax and let go of stress with this soothing playlist.', false, '8fee0fc1-73b9-490a-bd6b-ecede4634fe4');
INSERT INTO "Playlist" ("id", "name", "description", "isPublic", "userId") VALUES ('1f312432-e5d9-4a32-8cf3-cc6d3e8c1d83', 'Mindful Morning', 'A collection of serene tracks to help you unwind.', true, '93c5b01a-d4d9-4c62-9814-7b3d9eb8b74d');
INSERT INTO "Playlist" ("id", "name", "description", "isPublic", "userId") VALUES ('518efef5-5de3-4a57-b9f6-cee56d31b4d9', 'Stress Relief Oasis', 'Enhance your concentration with these calming sounds.', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Playlist" ("id", "name", "description", "isPublic", "userId") VALUES ('b28e4d32-4bfe-4a79-a07a-ea71b228979f', 'Focus and Clarity', 'Relax and let go of stress with this soothing playlist.', false, 'a3580f0c-fdf7-4637-8944-b08901bc2be9');
INSERT INTO "Playlist" ("id", "name", "description", "isPublic", "userId") VALUES ('754c3493-489a-46cd-965c-3542e3ede32a', 'Tranquil Moments', 'Relax and let go of stress with this soothing playlist.', false, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Playlist" ("id", "name", "description", "isPublic", "userId") VALUES ('4d308a96-6db9-4df7-8dc1-d68de8a62bf0', 'Deep Sleep Journey', 'Guided meditations for a restful nights sleep.', false, '93c5b01a-d4d9-4c62-9814-7b3d9eb8b74d');
INSERT INTO "Playlist" ("id", "name", "description", "isPublic", "userId") VALUES ('5e35b810-7a01-4cd8-b201-fb54b5207283', 'Deep Sleep Journey', 'Enhance your concentration with these calming sounds.', false, 'c20493c8-79be-43ba-a5ed-aa798a9a8ef9');

INSERT INTO "PlaylistTrack" ("id", "position", "playlistId", "trackId") VALUES ('e409d39f-954d-4005-a8fe-fb32dfbc7b30', 73, '8c1d07a1-a025-41c8-80b3-ece49efebff7', '7508b841-170d-492a-bf77-0981f3a423fc');
INSERT INTO "PlaylistTrack" ("id", "position", "playlistId", "trackId") VALUES ('223825f4-06ff-4456-870e-732099601351', 272, '1f312432-e5d9-4a32-8cf3-cc6d3e8c1d83', '7508b841-170d-492a-bf77-0981f3a423fc');
INSERT INTO "PlaylistTrack" ("id", "position", "playlistId", "trackId") VALUES ('aa10dc82-9539-46cb-ae8b-160b6aa9ab33', 935, '754c3493-489a-46cd-965c-3542e3ede32a', '1eb9d736-5244-4d0d-8579-d247ae747229');
INSERT INTO "PlaylistTrack" ("id", "position", "playlistId", "trackId") VALUES ('736db4e2-5ac2-416c-95b2-97909362dca2', 355, 'b28e4d32-4bfe-4a79-a07a-ea71b228979f', '03aa8999-4ea0-4007-9492-ab566e5431db');
INSERT INTO "PlaylistTrack" ("id", "position", "playlistId", "trackId") VALUES ('d90894dc-66cf-4e59-ac2b-aac69d91d3b6', 466, '754c3493-489a-46cd-965c-3542e3ede32a', '18e854ec-be7e-4a3d-9fd3-c918994af4f1');
INSERT INTO "PlaylistTrack" ("id", "position", "playlistId", "trackId") VALUES ('69774500-7074-477e-952a-a1412c53f26c', 724, 'b28e4d32-4bfe-4a79-a07a-ea71b228979f', 'fa0e755f-2fc3-4003-ace0-38ea5c498dc0');
INSERT INTO "PlaylistTrack" ("id", "position", "playlistId", "trackId") VALUES ('b61270b6-90fe-49cc-b7e1-06fe152f8565', 909, '1f312432-e5d9-4a32-8cf3-cc6d3e8c1d83', '62211780-c931-4fc9-9a95-71f478263c4a');
INSERT INTO "PlaylistTrack" ("id", "position", "playlistId", "trackId") VALUES ('c1e7a5bb-ff7b-4f98-b0b8-a8596e35a0df', 841, '8c1d07a1-a025-41c8-80b3-ece49efebff7', 'fa0e755f-2fc3-4003-ace0-38ea5c498dc0');
INSERT INTO "PlaylistTrack" ("id", "position", "playlistId", "trackId") VALUES ('97e0925c-d1b3-40c4-bdcc-e4d137ed36ff', 162, '4d308a96-6db9-4df7-8dc1-d68de8a62bf0', '7508b841-170d-492a-bf77-0981f3a423fc');
INSERT INTO "PlaylistTrack" ("id", "position", "playlistId", "trackId") VALUES ('c588d160-8ae5-4506-af3f-4b7a342e1741', 999, '518efef5-5de3-4a57-b9f6-cee56d31b4d9', '03aa8999-4ea0-4007-9492-ab566e5431db');

INSERT INTO "MeditationSession" ("id", "duration", "completedAt", "rating", "userId", "trackId") VALUES ('4478f69f-0ad1-4be2-940b-9035884976d7', 569, '2025-02-15T07:21:50.446Z', 722, 'c20493c8-79be-43ba-a5ed-aa798a9a8ef9', '18e854ec-be7e-4a3d-9fd3-c918994af4f1');
INSERT INTO "MeditationSession" ("id", "duration", "completedAt", "rating", "userId", "trackId") VALUES ('a61941e4-d2a3-4fa2-a6ba-7aec4a647ff9', 438, '2025-07-21T00:06:56.023Z', 778, 'c20493c8-79be-43ba-a5ed-aa798a9a8ef9', 'd0342926-2a08-4174-a07e-d0b1379d6bfd');
INSERT INTO "MeditationSession" ("id", "duration", "completedAt", "rating", "userId", "trackId") VALUES ('05667e02-c18b-4da7-b58a-e76129fad3be', 88, '2024-04-04T05:02:48.027Z', 269, 'd9c368c7-e4bd-499f-8351-67becebe2902', '7508b841-170d-492a-bf77-0981f3a423fc');
INSERT INTO "MeditationSession" ("id", "duration", "completedAt", "rating", "userId", "trackId") VALUES ('2b151f0d-7a07-4251-b044-0151aa9948ae', 604, '2025-05-24T04:47:22.555Z', 855, 'd9c368c7-e4bd-499f-8351-67becebe2902', '03aa8999-4ea0-4007-9492-ab566e5431db');
INSERT INTO "MeditationSession" ("id", "duration", "completedAt", "rating", "userId", "trackId") VALUES ('a198145b-57a8-4242-9e5a-a7548518440d', 859, '2024-06-23T17:31:02.967Z', 836, '06ef8341-e873-458f-86f2-e50b490dd78b', '20701cea-731a-453a-b81e-a59faff4e1f0');
INSERT INTO "MeditationSession" ("id", "duration", "completedAt", "rating", "userId", "trackId") VALUES ('c91525fe-353b-4716-ae25-516d9e76ef00', 960, '2025-06-14T10:54:53.550Z', 572, '06ef8341-e873-458f-86f2-e50b490dd78b', '03aa8999-4ea0-4007-9492-ab566e5431db');
INSERT INTO "MeditationSession" ("id", "duration", "completedAt", "rating", "userId", "trackId") VALUES ('9c95b506-6b5a-40f5-8d12-95ccbf0782c5', 540, '2025-07-20T16:40:03.537Z', 760, 'c20493c8-79be-43ba-a5ed-aa798a9a8ef9', '7508b841-170d-492a-bf77-0981f3a423fc');
INSERT INTO "MeditationSession" ("id", "duration", "completedAt", "rating", "userId", "trackId") VALUES ('3e6a4c13-ecf9-45b2-bbdb-4405158a2303', 410, '2024-04-06T16:56:42.059Z', 97, '06ef8341-e873-458f-86f2-e50b490dd78b', '62211780-c931-4fc9-9a95-71f478263c4a');
INSERT INTO "MeditationSession" ("id", "duration", "completedAt", "rating", "userId", "trackId") VALUES ('3f2ab91a-49e6-4980-8258-4f26930a1628', 798, '2024-01-22T11:38:45.024Z', 215, '93c5b01a-d4d9-4c62-9814-7b3d9eb8b74d', '3c9b3bc0-c5d5-408a-8da5-e947f9c74b0e');
INSERT INTO "MeditationSession" ("id", "duration", "completedAt", "rating", "userId", "trackId") VALUES ('d8859b0c-2969-43af-bf7b-dcb191b265f3', 88, '2025-08-18T17:45:38.241Z', 254, 'a3580f0c-fdf7-4637-8944-b08901bc2be9', '18e854ec-be7e-4a3d-9fd3-c918994af4f1');

INSERT INTO "Subscription" ("id", "planType", "status", "startDate", "endDate", "userId") VALUES ('cd186da5-63b1-408c-976f-59930c52647b', 'quarterly', 'suspended', '2024-02-24T06:05:03.898Z', '2024-08-21T16:16:13.356Z', 'fee24354-abe8-4a49-9a8a-1108fee8c2d9');
INSERT INTO "Subscription" ("id", "planType", "status", "startDate", "endDate", "userId") VALUES ('9983dead-13c2-4b77-b2ea-bd516af43df6', 'yearly', 'pending', '2024-08-22T00:51:49.784Z', '2024-03-25T02:42:33.299Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Subscription" ("id", "planType", "status", "startDate", "endDate", "userId") VALUES ('72c41832-c1c2-464d-baba-32c3a582aa37', 'weekly', 'active', '2025-08-20T06:47:56.005Z', '2024-01-26T21:08:51.363Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Subscription" ("id", "planType", "status", "startDate", "endDate", "userId") VALUES ('451c812a-82f2-40af-b353-cc26b071f013', 'biannual', 'expired', '2025-02-18T19:38:48.522Z', '2023-11-08T14:36:20.490Z', '541bcd2a-3a05-4eb6-9472-090a8b9d065f');
INSERT INTO "Subscription" ("id", "planType", "status", "startDate", "endDate", "userId") VALUES ('1c0b5de4-1662-4958-a8d4-f3c6fd418ebc', 'weekly', 'suspended', '2024-02-07T02:37:47.905Z', '2024-01-19T22:38:22.934Z', 'd6897d54-63f1-43dc-b903-94a31156c935');
INSERT INTO "Subscription" ("id", "planType", "status", "startDate", "endDate", "userId") VALUES ('2f5964b2-1f5a-4430-be39-e75632f3adbd', 'monthly', 'suspended', '2025-02-10T09:10:22.101Z', '2025-08-02T12:37:20.787Z', 'fee24354-abe8-4a49-9a8a-1108fee8c2d9');
INSERT INTO "Subscription" ("id", "planType", "status", "startDate", "endDate", "userId") VALUES ('cfca5ddc-3034-4b7e-b90f-e3b860d9ae10', 'weekly', 'canceled', '2025-08-01T03:13:38.604Z', '2024-06-04T07:45:33.757Z', 'd9c368c7-e4bd-499f-8351-67becebe2902');
INSERT INTO "Subscription" ("id", "planType", "status", "startDate", "endDate", "userId") VALUES ('e7d86613-6c3a-4342-9980-e42ff9bb0f88', 'quarterly', 'pending', '2024-02-03T23:09:08.958Z', '2025-05-19T16:56:08.545Z', '8fee0fc1-73b9-490a-bd6b-ecede4634fe4');
INSERT INTO "Subscription" ("id", "planType", "status", "startDate", "endDate", "userId") VALUES ('fac44d7a-4419-423c-925c-afef0b1f9235', 'biannual', 'canceled', '2024-04-01T22:11:09.415Z', '2024-04-25T02:42:42.286Z', '93c5b01a-d4d9-4c62-9814-7b3d9eb8b74d');
INSERT INTO "Subscription" ("id", "planType", "status", "startDate", "endDate", "userId") VALUES ('d7d9f845-8702-4c99-a47e-90e7c7e7d244', 'weekly', 'suspended', '2025-02-22T08:42:44.564Z', '2025-03-29T04:19:04.128Z', 'a3580f0c-fdf7-4637-8944-b08901bc2be9');

INSERT INTO "Reminder" ("id", "time", "frequency", "isEnabled", "userId") VALUES ('55192139-7d70-404c-b7cb-aad7a052520d', '0600 PM', 'daily', true, 'd6897d54-63f1-43dc-b903-94a31156c935');
INSERT INTO "Reminder" ("id", "time", "frequency", "isEnabled", "userId") VALUES ('db09a996-2928-44c9-953e-ccae29f2f339', '0800 AM', 'weekly', true, 'c20493c8-79be-43ba-a5ed-aa798a9a8ef9');
INSERT INTO "Reminder" ("id", "time", "frequency", "isEnabled", "userId") VALUES ('0cb47ad5-f7d8-451f-8d85-827763f6c3c3', '0600 PM', 'weekly', false, '06ef8341-e873-458f-86f2-e50b490dd78b');
INSERT INTO "Reminder" ("id", "time", "frequency", "isEnabled", "userId") VALUES ('81102edc-5d8f-41b9-aa74-dfd236ac9ebf', '1230 PM', 'weekly', false, 'c20493c8-79be-43ba-a5ed-aa798a9a8ef9');
INSERT INTO "Reminder" ("id", "time", "frequency", "isEnabled", "userId") VALUES ('00a26eaa-ef9e-48e9-8f0a-545285882a61', '0915 PM', 'monthly', false, 'd6897d54-63f1-43dc-b903-94a31156c935');
INSERT INTO "Reminder" ("id", "time", "frequency", "isEnabled", "userId") VALUES ('8b405bac-99a9-4fba-bbaf-8d0ad839a47d', '0800 AM', 'weekdays', false, 'a3580f0c-fdf7-4637-8944-b08901bc2be9');
INSERT INTO "Reminder" ("id", "time", "frequency", "isEnabled", "userId") VALUES ('b3bb7829-2c77-4651-b777-2efc409cbfe5', '1230 PM', 'biweekly', false, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Reminder" ("id", "time", "frequency", "isEnabled", "userId") VALUES ('f0033823-a1d4-461f-98dc-a95ebbd4a0fa', '0800 AM', 'monthly', false, 'a3580f0c-fdf7-4637-8944-b08901bc2be9');
INSERT INTO "Reminder" ("id", "time", "frequency", "isEnabled", "userId") VALUES ('4c37973d-e96c-4f2d-9cf0-5d8166a5cfb0', '0800 AM', 'weekdays', true, 'fee24354-abe8-4a49-9a8a-1108fee8c2d9');
INSERT INTO "Reminder" ("id", "time", "frequency", "isEnabled", "userId") VALUES ('ae64fc2a-ee6c-4efe-8995-6126c4436001', '0345 PM', 'weekly', false, 'd6897d54-63f1-43dc-b903-94a31156c935');

INSERT INTO "Favorite" ("id", "userId", "trackId") VALUES ('bcce1b04-04ab-4e49-927c-ab92a67428fe', 'a3580f0c-fdf7-4637-8944-b08901bc2be9', 'fa0e755f-2fc3-4003-ace0-38ea5c498dc0');
INSERT INTO "Favorite" ("id", "userId", "trackId") VALUES ('c176710a-92fa-48c8-9221-e8b8db7e3642', 'd6897d54-63f1-43dc-b903-94a31156c935', '3c9b3bc0-c5d5-408a-8da5-e947f9c74b0e');
INSERT INTO "Favorite" ("id", "userId", "trackId") VALUES ('6d518000-587a-48ac-a026-94b1cc804d93', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '18e854ec-be7e-4a3d-9fd3-c918994af4f1');
INSERT INTO "Favorite" ("id", "userId", "trackId") VALUES ('1c494354-7f63-4df7-bd86-a357c0c740c4', 'fee24354-abe8-4a49-9a8a-1108fee8c2d9', '7508b841-170d-492a-bf77-0981f3a423fc');
INSERT INTO "Favorite" ("id", "userId", "trackId") VALUES ('a70c8712-48e6-4fb0-9689-4850174fdbe0', 'c20493c8-79be-43ba-a5ed-aa798a9a8ef9', '5957a4f2-be96-4667-bdbe-b113c88bb25f');
INSERT INTO "Favorite" ("id", "userId", "trackId") VALUES ('acefed88-3d8a-4614-8fd1-b1e05ed07c46', 'fee24354-abe8-4a49-9a8a-1108fee8c2d9', '20701cea-731a-453a-b81e-a59faff4e1f0');
INSERT INTO "Favorite" ("id", "userId", "trackId") VALUES ('c70fe20f-99b0-4f62-8b3d-bc7deaac32bd', 'c20493c8-79be-43ba-a5ed-aa798a9a8ef9', 'd0342926-2a08-4174-a07e-d0b1379d6bfd');
INSERT INTO "Favorite" ("id", "userId", "trackId") VALUES ('d59f03f9-d857-4c25-84ed-473ce683123a', 'a3580f0c-fdf7-4637-8944-b08901bc2be9', 'd0342926-2a08-4174-a07e-d0b1379d6bfd');
INSERT INTO "Favorite" ("id", "userId", "trackId") VALUES ('747c6388-7171-40da-a02b-a3919df55600', '541bcd2a-3a05-4eb6-9472-090a8b9d065f', '1eb9d736-5244-4d0d-8579-d247ae747229');
INSERT INTO "Favorite" ("id", "userId", "trackId") VALUES ('44170c80-393f-4fbf-900d-4af95c7d1a48', '06ef8341-e873-458f-86f2-e50b490dd78b', '20701cea-731a-453a-b81e-a59faff4e1f0');

INSERT INTO "CommunityPost" ("id", "content", "title", "type", "userId") VALUES ('8dc5e808-4c57-4521-8e28-53bfb0d0f0b6', '5 tips for a more mindful morning routine.', 'Focus Through Meditation', 'guide', 'a3580f0c-fdf7-4637-8944-b08901bc2be9');
INSERT INTO "CommunityPost" ("id", "content", "title", "type", "userId") VALUES ('8c87c9cc-0f39-4a10-b67e-d518329554fd', 'Creating a calming space for meditation at home.', 'Mindful Mornings', 'discussion', 'd9c368c7-e4bd-499f-8351-67becebe2902');
INSERT INTO "CommunityPost" ("id", "content", "title", "type", "userId") VALUES ('45a8f8ea-0a60-4282-bec5-865a5459cb21', 'The benefits of guided meditation for beginners.', 'Guided Meditation 101', 'guide', 'd6897d54-63f1-43dc-b903-94a31156c935');
INSERT INTO "CommunityPost" ("id", "content", "title", "type", "userId") VALUES ('60414287-0c20-4b57-83cc-11a0bec8415a', 'How meditation can improve your focus and productivity.', 'Focus Through Meditation', 'blog', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "CommunityPost" ("id", "content", "title", "type", "userId") VALUES ('93933a13-3d10-4d3b-93cf-98821f7b6e59', 'Finding peace in the chaos of everyday life.', 'Your Meditation Sanctuary', 'tutorial', 'fee24354-abe8-4a49-9a8a-1108fee8c2d9');
INSERT INTO "CommunityPost" ("id", "content", "title", "type", "userId") VALUES ('cd9b0daf-f52d-43dd-b4f1-cc5356913916', '5 tips for a more mindful morning routine.', 'Embrace Tranquility', 'discussion', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "CommunityPost" ("id", "content", "title", "type", "userId") VALUES ('9c4fdefa-513d-40e6-b71b-f5de14c3cb65', 'The benefits of guided meditation for beginners.', 'Focus Through Meditation', 'guide', 'a3580f0c-fdf7-4637-8944-b08901bc2be9');
INSERT INTO "CommunityPost" ("id", "content", "title", "type", "userId") VALUES ('7af57cd3-6254-4d9e-9495-3ca65d5c739e', 'How meditation can improve your focus and productivity.', 'Embrace Tranquility', 'blog', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "CommunityPost" ("id", "content", "title", "type", "userId") VALUES ('42618cc1-4a10-45b9-897b-aba58b60a166', 'How meditation can improve your focus and productivity.', 'Focus Through Meditation', 'blog', 'fee24354-abe8-4a49-9a8a-1108fee8c2d9');
INSERT INTO "CommunityPost" ("id", "content", "title", "type", "userId") VALUES ('1895865c-8080-4a69-ae83-948d4fe50e27', 'Creating a calming space for meditation at home.', 'Your Meditation Sanctuary', 'discussion', 'd9c368c7-e4bd-499f-8351-67becebe2902');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
