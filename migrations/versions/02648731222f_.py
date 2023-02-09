"""empty message

Revision ID: 02648731222f
Revises: dac8e9646030
Create Date: 2023-02-02 18:56:02.903835

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '02648731222f'
down_revision = 'dac8e9646030'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('tickets', sa.Column('user_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'tickets', 'user', ['user_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'tickets', type_='foreignkey')
    op.drop_column('tickets', 'user_id')
    # ### end Alembic commands ###
