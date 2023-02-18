"""empty message

Revision ID: 4d19fd91b6cb
Revises: 021c0eacda00
Create Date: 2023-02-14 15:44:48.801221

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4d19fd91b6cb'
down_revision = '021c0eacda00'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('poster_id', sa.Integer(), nullable=False),
    sa.Column('cloud_id', sa.String(), nullable=True),
    sa.Column('url', sa.String(), nullable=True),
    sa.Column('alt', sa.String(), nullable=True),
    sa.Column('caption', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['poster_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('images')
    # ### end Alembic commands ###
