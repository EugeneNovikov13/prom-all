import banner from '../../assets/banner.svg'
import styled from 'styled-components';
import { QuickApplication } from '../../components';

const MainContainer = ({ className }) => {

	return (
		<div className={className}>
			<h1 style={{textAlign: 'center'}}>ГЛАВНАЯ</h1>
			<img src={banner} alt='-' />
			<div>
				<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae delectus dolor doloribus
					dolorum hic labore laboriosam libero omnis perferendis quo, quod saepe sequi tempora tempore tenetur
					unde ut voluptates.
				</div>
				<div>A accusamus aspernatur at aut consectetur cum dolore earum, eius, esse est explicabo fugit hic
					ipsum iste itaque iusto laborum nisi officiis porro reiciendis reprehenderit sit suscipit temporibus
					totam, ut.
				</div>
				<div>Accusantium illum maiores perferendis. Assumenda at, autem blanditiis cumque deleniti dolor
					excepturi, magni nam quae quisquam quo, rerum sunt vel. Quidem reiciendis reprehenderit similique!
					Aperiam eos est placeat quo sequi!
				</div>
				<div>Aut consequatur eum hic libero quod. Consequatur earum esse illo incidunt ipsa maxime numquam
					quisquam vel? Accusantium beatae, blanditiis error fuga fugit, libero molestias quo reiciendis
					temporibus ullam voluptate voluptatem!
				</div>
				<div>Ad aperiam consequatur consequuntur delectus, deleniti dolores doloribus ducimus eligendi, eveniet
					fugiat labore minima mollitia natus nobis officiis quia quidem quo repellendus, repudiandae saepe
					suscipit ullam ut vero! Architecto, ipsam?
				</div>
				<div>Autem, eaque, et. Ad consectetur cumque debitis dolore excepturi facilis fuga illum inventore iure
					labore minus, nam nesciunt odio provident qui quidem reprehenderit repudiandae tempore vel velit.
					Earum, explicabo obcaecati!
				</div>
				<div>Amet dignissimos dolor esse explicabo facilis fugiat, itaque magnam odit perspiciatis reiciendis
					repellat similique voluptate. Aliquid architecto autem consectetur cumque dolores, eaque esse
					laboriosam porro totam, veniam veritatis voluptas voluptatum!
				</div>
				<div>Blanditiis dignissimos excepturi, fuga fugit laudantium officia sequi? Consequatur deleniti,
					deserunt dolorem doloremque doloribus ea ex exercitationem explicabo fuga laboriosam, libero numquam
					praesentium quasi qui reiciendis tempora ut vel voluptatum!
				</div>
				<div>Accusantium amet aut beatae commodi consequatur doloremque ducimus et eveniet excepturi
					exercitationem facere ipsa iusto maxime mollitia praesentium quibusdam repellendus soluta, tempora
					velit, vitae? Accusantium corporis culpa fuga impedit ipsam!
				</div>
				<div>Corporis debitis impedit, maiores molestiae molestias nihil, odit officiis porro possimus quod quos
					sed voluptate voluptatem. Atque et porro quo sapiente. Beatae dicta dolor in qui sed sequi sit
					tempora!
				</div>
				<div>Accusantium adipisci alias animi architecto consequuntur cum, cupiditate delectus deserunt dolorum
					est ex fugiat fugit illo in itaque, laboriosam magni molestias nemo odit officia pariatur similique
					sit tenetur veritatis vitae.
				</div>
				<div>A aliquid aspernatur at commodi deleniti deserunt doloribus eius enim eos error iste molestias odit
					pariatur quae, quaerat qui repudiandae rerum saepe totam ullam velit vero voluptates! Culpa,
					ducimus, quam!
				</div>
				<div>Accusantium aliquam aliquid aspernatur commodi dignissimos error et eveniet, expedita facere harum
					hic in inventore ipsum iste laboriosam laborum nemo perferendis quaerat quasi quia quidem quo
					repudiandae tenetur vel voluptatibus.
				</div>
				<div>Accusamus accusantium, adipisci aliquam doloribus eveniet expedita harum hic id in incidunt labore
					molestias mollitia nemo nihil numquam odio, omnis quam quod reiciendis repellat reprehenderit
					repudiandae saepe sequi soluta voluptatum?
				</div>
				<div>At dolores molestias, nisi nostrum porro quis quo repellendus. At atque deserunt facilis harum
					illum inventore quia quod repellendus? Autem ducimus eius enim exercitationem modi nostrum obcaecati
					quos sed vitae?
				</div>
				<div>A aliquid aperiam aut consequuntur dicta excepturi impedit, inventore magni natus non qui quia
					suscipit. Commodi deleniti doloremque, impedit laborum maxime quam rem tenetur veritatis. Excepturi
					ipsa quia quisquam suscipit.
				</div>
				<div>Aspernatur autem itaque, molestias quos soluta vero voluptatum. Ad aspernatur at possimus
					voluptates. Accusantium aut beatae cum dolore ducimus eligendi excepturi exercitationem laudantium
					nisi odit, quasi repellat repudiandae sint voluptatibus?
				</div>
				<div>Accusantium cupiditate dolor omnis tempore. Aperiam blanditiis maiores pariatur placeat! Aliquid
					autem consectetur, deleniti dolores dolorum, fugiat labore laudantium maiores neque odio pariatur,
					quia sit totam vel voluptas! Inventore, similique.
				</div>
				<div>Ab labore molestiae sapiente tempora velit. Autem beatae corporis distinctio dolorem dolores eaque
					eligendi expedita fuga quaerat sequi! Adipisci dolorum fugit in incidunt iste modi officia quo rerum
					unde veniam.
				</div>
				<div>Aliquid aut blanditiis consectetur dicta ea eum ex fuga fugiat hic iste labore magnam, minima,
					nihil non nostrum placeat quia quibusdam quo repudiandae sed sequi sint, totam ut vel vero.
				</div>
				<QuickApplication/>
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	width: 100%;

	& img {
		width: 100%;
		height: 100%;
	}
`;
